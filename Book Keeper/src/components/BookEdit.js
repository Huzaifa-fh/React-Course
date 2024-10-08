import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title); 
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;