import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookCreator from './Author';
import CreateBookObject from './BooksCreate';
import { fetchBooks } from '../redux/fetchBooks';

function BookStore() {
  const theDispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    theDispatch(fetchBooks());
  }, [theDispatch]);

  return (
    <div className="container">
      <ul className="books">
        {books.map((book) => (
          <BookCreator
            key={book.Id}
            Id={book.Id}
            Title={book.title}
            Author={book.author}
            Category={book.category}
          />
        ))}
      </ul>
      <div className="create"> </div>
      <CreateBookObject />
    </div>
  );
}

export default BookStore;
