import { Link } from "react-router";
import "./Header.css";


const Header = () => {

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h2>Book Library</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/addbook">Add Book</Link>
          <Link to="/todos">Todos</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;