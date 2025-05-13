import { useState } from "react";
import BookCard from "./BookCard.jsx";
import axios from "axios";
import { useEffect } from "react";

const BookList = () => {
  const [booksData, setBooksData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
    .get("http://localhost:3001/books")
    .then((res) => setBooksData(res.data))
    .catch((error) => console.log("Axios error", error));
  }, []);



  const searchHandle = (event) => {
    setSearchValue(event.target.value);
  };

  const toggleStock = (id) => {
    setBooksData(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, inStock: !book.inStock } : book
      )
    );
  };

  const toggleFavorite = (id) => {
    setBooksData(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, isFavorite: !book.isFavorite } : book
      )
    );
  };

  const oneMorePriceUpdate = (id, newPrice) => {
    setBooksData(prevBooks =>
      prevBooks.map(book =>
        book.id === id ? { ...book, price: newPrice } : book
      )
    );
  };

  const filteredBooks = booksData.filter(book =>
    typeof book.title === "string" &&
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div style={{ padding: '20px', textAlign: 'center' }}>
    <label htmlFor="search">Search: </label>
    <input
      type="text"
      id="search"
      name="search"
      value={searchValue}
      onChange={searchHandle}
    />
    <p>You are searching for: {searchValue}</p>
    </div>
  
      <main>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            {...book}
            onToggleStock={toggleStock}
            onToggleFavorite={toggleFavorite}
            onOneMorePriceUpdate={oneMorePriceUpdate}
          />
        ))}
      </main>
      </div>
  );
};

export default BookList;