import React, { useState } from 'react';
import '../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const defaultState = { id: '', title: '', author: '' };

const Input = () => {
  const [booksState, setBooksState] = useState(defaultState);

  const data = useSelector((state) => state.books);

  const bookArr = data.books;
  let id = bookArr.length;

  const addNewBook = (e) => {
    setBooksState({
      ...booksState,
      id: (id += 1).toString(),
      [e.target.name]: [e.target.value].toString(),
    });
  };

  const BookSubmit = () => {
    useDispatch(addBook(booksState));
    setBooksState(defaultState);
  };

  return (
    <form className="input-area" onSubmit={BookSubmit}>
      <h2>Add books</h2>
      <div className="title">
        <input
          type="text"
          id="text"
          placeholder="Book Title"
          value={booksState.title}
          onChange={addNewBook}
        />
      </div>
      <div className="author">
        <input
          type="text"
          id="text-author"
          placeholder="Book Author"
          value={booksState.author}
          onChange={addNewBook}
        />
      </div>
      <button type="submit" className="add">
        Add Book
      </button>
    </form>
  );
};
export default Input;
