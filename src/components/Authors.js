import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookTitle(props) {
  const {
    id, title, author, category,
  } = props;

  const DeleteBook = () => {
    useDispatch(removeBook(id));
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{category}</p>
      <button type="submit" onClick={DeleteBook}>
        Remove
      </button>
    </div>
  );
}
export { BookTitle as default };
BookTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
