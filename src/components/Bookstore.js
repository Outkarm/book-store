import React from 'react';
import { useSelector } from 'react-redux';
import BookTitle from './Authors';
import Input from './Form';
import '../styles/App.css';

function StoreBook() {
  const Books = useSelector((state) => state.books);
  return (
    <div>
      <ul className="the-books">
        {Books.map((book) => (
          <li className="container" key={book.id}>
            <BookTitle title={book.title} author={book.author} />
          </li>
        ))}
      </ul>
      <Input />
    </div>
  );
}

export default StoreBook;
