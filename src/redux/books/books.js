import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const ADDED_BOOK = 'book-store/src/redux/books/ADDED_BOOK';
const REMOVED_BOOK = 'book-store/src/redux/books/REMOVED_BOOK';
const FETCHED_BOOK = 'book-store/src/redux/books/FETCHED_BOOK';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u3xmmQRbfeB91LfO6ZBo/books';

// initialState
const initialState = {
  books: [],
};

// Action creators

//  createAsyncThunk

export const fetchBooks = createAsyncThunk(
  FETCHED_BOOK,
  async (post, { theDispatch }) => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const books = Object.keys(jsonData).map((id) => ({
      ...jsonData[id][0],
      item_id: id,
    }));
    theDispatch({
      type: FETCHED_BOOK,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(
  ADDED_BOOK,
  async (book, { theDispatch }) => {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    theDispatch({ type: ADDED_BOOK, payload: book });
  },
);
export const removeBook = createAsyncThunk(
  REMOVED_BOOK,
  async (id, { theDispatch }) => {
    await fetch(apiUrl, { method: 'DELETE' });
    theDispatch({ type: REMOVED_BOOK, payload: id });
  },
);

// Reducer
const booksReducer = (state = initialState, action) => {
  if (action.type === FETCHED_BOOK) {
    return action.payload;
  }
  if (action.type === ADDED_BOOK) {
    return [...state, action.payload];
  }
  if (action.type === REMOVED_BOOK) {
    return state.filter((book) => book.item_id !== action.payload);
  }
  return state;
};

export default booksReducer;
