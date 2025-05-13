import { useState } from "react";
import axios from "axios";
import "./BookCard.css";

const BookCard = ({
  id,
  title,
  author,
  year,
  price,
  genre,
  isFavorite,
  inStock,
  onToggleStock,
  onToggleFavorite
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState("");
  const [localPrice, setLocalPrice] = useState(price);

  const handlePriceSave = () => {
    axios.put(`http://localhost:3001/books/${id}`, {
      id,
      title,
      author,
      year,
      price: parseFloat(newPrice),
      genre,
      isFavorite,
      inStock
    })
    .then((res) => {
      setLocalPrice(res.data.price);
    })
    .catch((error) => {
      console.error("Failed to update price:", error);
    })
    .finally(() => {
      setIsEditing(false);
    });
  };

  return (
    <div className="card">
      <div className="pic"></div>
      <p onClick={() => onToggleFavorite(id)}>{isFavorite ? "🐱" : "🐶"}</p>
      <p><b>ID:</b> {id}</p>
      <p><b>Title:</b> {title}</p>
      <p><b>Author:</b> {author}</p>
      <p><b>Year:</b> {year}</p>
      <p><b>Price:</b> {localPrice}</p>
      <p><b>Genre:</b> {genre}</p>
      <p onClick={() => onToggleStock(id)}><b>In stock:</b> {inStock ? "Yes" : "No"}</p>
      {!inStock && <button>Add to wishlist</button>}

      {isEditing ? (
        <div>
          <input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} placeholder="New price"/>
          <button onClick={handlePriceSave}>Save</button>
        </div>
      ) : (
        <button onClick={() => {setIsEditing(true); setNewPrice(localPrice);}}>Edit</button>
      )}
    </div>
  );
};

export default BookCard;