import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddBookForm = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/books")
          .then(res => setBooks(res.data))
          .catch(error => console.error("Error fetching books:", error));
      }, []);

    const [formData, setFormData] = useState({
        title: "",
        author: "",
        year: "",
        price: "",
        genre: "",
        inStock: false,
        isFavorite: false
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("The form was submitted");

        const newBook = {
            ...formData,
            id: books.length + 1,
            price: parseFloat(formData.price)
        };

        axios.post("http://localhost:3001/books", newBook)
            .then((res) => console.log("Book added!", res.data))
            .catch((error) => console.log("Error adding book", error));

        navigate("/books");

        setFormData({
            title: "",
            author: "",
            year: "",
            price: "",
            genre: "",
            inStock: false,
            isFavorite: false
        });
    };

    return (
            <main>
                <h1>Add Book</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input 
                        type="text" 
                        id="author" 
                        name="author" 
                        value={formData.author} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="year">Year:</label>
                        <input 
                        type="number" 
                        id="year" 
                        name="year" 
                        value={formData.year} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="genre">Genre:</label>
                        <input 
                        type="text" 
                        id="genre" 
                        name="genre" 
                        value={formData.genre} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="inStock">In Stock:</label>
                        <input 
                        type="checkbox" 
                        id="inStock" 
                        name="inStock" 
                        checked={formData.inStock} 
                        onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="isFavorite">Is Favorite:</label>
                        <input 
                        type="checkbox" 
                        id="isFavorite" 
                        name="isFavorite" 
                        checked={formData.isFavorite} 
                        onChange={handleChange} />
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </main>
    );
};

export default AddBookForm;
