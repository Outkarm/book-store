import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookTitle from './Authors';
import Input from './Form';
import '../styles/App.css';
import { fetchBooks } from '../redux/books/books';

const StoreBook = () => {
  const { books } = useSelector((state) => state.books);

  const theDispatch = useDispatch();

  useEffect(() => {
    theDispatch(fetchBooks());
  }, [theDispatch]);

  return (
    <div>
      <ul className="the-books">
        {books.map((book) => (
          <BookTitle
            key={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <Input />
    </div>
  );
};

export default StoreBook;
