import React from 'react';
import BookTitle from './Authors';
import Input from './Form';
import '../styles/App.css';

function StoreBook() {
  const Books = [
    {
      id: 1,
      title: 'The Hunger Games',
      genres: 'Action',
      author: 'Suzanne Collins',
      progres: 64,
      chapter: 'Chapter 17: "A Lesson Learned"',
    },
    {
      id: 2,
      title: 'Dune',
      genres: 'Fantasy',
      author: 'Frank Herbert',
      progres: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      genres: 'Economics',
      author: 'Suzanne Collins',
      progres: 0,
      chapter: 'Introduction: "A Lesson Learned"',
    },
  ];

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
