import { createBrowserRouter, RouterProvider} from "react-router";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import BookList from "./components/Books/BookList";
import AddBookForm from "./pages/AddBookForm";
import Example from "./pages/Example";
import Todos from "./pages/Todos";
import AxiosExample from "./pages/AxiosExample";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "books",
        element: <BookList />,
      },
      {
        path: "addbook",
        element: <AddBookForm />,
      },
      {
        path: "example",
        element: <Example />,
      },
      {
        path: "todos",
        element: <Todos />,
      },
      {
        path: "axiosexample",
        element: <AxiosExample />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
  <RouterProvider  router={router}/>
    </>
  )
};
export default App;