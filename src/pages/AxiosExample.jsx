import {useEffect, useState} from 'react';
import axios from 'axios';

const AxiosExample = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get("http://localhost:3001/books")
        .then((res) => setBooks(res.data))
        .catch((error) => console.log("Axios error", error))
        .finally(() => setLoading(false));
    }, []);

    console.log("books", books);

    return loading ? (
        <div>Loading...</div>
    ) : (
        <div>
            {books.map((book) => (<p key={book.id}>{book.title}{book.author}</p>))}
        </div>
    ); 
};

export default AxiosExample;