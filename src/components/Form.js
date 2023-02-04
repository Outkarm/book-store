import React from 'react';
import '../styles/App.css';

function Input() {
  return (
    <form className="input-area">
      <h2>Add books</h2>
      <div className="title">
        <input type="text" id="text" placeholder="Book Title" />
      </div>
      <div className="author">
        <input type="text" id="text-author" placeholder="Book Author" />
      </div>
      <button type="submit" className="add">
        Add Book
      </button>
    </form>
  );
}
export { Input as default };
