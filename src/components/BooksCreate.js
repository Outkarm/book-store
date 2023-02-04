import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/fetchBooks';
import '../styles/app.css';

function CreateBookObject() {
  const [state, setState] = useState({
    item_id: uuidv4(),
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      category: 'Category Action',
    });
  };

  const theDispatch = useDispatch();

  const Submit = (e) => {
    e.preventDefault();
    theDispatch(addBook(state));
    setState({
      item_id: uuidv4(),
      title: '',
      author: '',
      category: 'Category thriller',
    });
  };

  return (
    <div className="Add-container">
      <h2 className="add-title">Add Your Book</h2>
      <section>
        <form className="add-book" onSubmit={Submit}>
          <input
            type="text"
            className="title-input"
            id="title"
            placeholder="Add Book Title"
            name="title"
            required
            value={state.title}
            onChange={onChange}
          />
          <input
            type="text"
            id="author"
            className="author-input"
            name="author"
            placeholder="Add Book Author"
            required
            value={state.author}
            onChange={onChange}
          />
          <button className="add-button" type="submit">
            Add Book
          </button>
        </form>
      </section>
    </div>
  );
}

export default CreateBookObject;
