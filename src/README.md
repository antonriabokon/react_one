-Import useState and bookData.
-Use useState to create books state from bookData.
Write two functions:
-toogleStock(id) toggles isStock for a book
-toggleFavorite(id) toggles isFavorite for a book
Pass these props to BookCard:
-The book object
-An arrow function: onToffleStock = {() => toggleStock(book.id)}
-An arrow function: onToggleFavorite = {() => toggleFavorite(book.id)}

-BookCard receive:
-book, onToggleStock and onToggleFavorite as props
-Add two buttons:
-one that triggers onToggleStock
-one that triggers onToggleFavorite


Task - update the price.
- Add a new state in BookCard to check if we are editing or not (use isEditing).
- When isEditing is false, show the price as text and an Edit button.
- When the user clicks Edit, set isEdit to true.
- Show an input field and a Save button.
- Add another state for the new price value (uxe newPrice).
- Make the input use newPrice and update it with onChange.
- When the user clicks Save:
    - Call a function from props to update the price (give it the id and new price).
    - Set isEditing to false so we go back to normal view.
- Only allow Save if the price has changed and is not empty.

Task
- Create a new component called AddBookForm.
- Inside the form, create a use State for each field: title, author, price, genre.
- Add one input for each field (with labels or placeholders).
- Add a button that says "Add Book"
- When the button is clicked:
    - Build a new book object with the typed values.
    - Call a function from props to send the new book to the parent.
    - Clear the input fields after adding the book.

Task
- Instead of multiple useState, create