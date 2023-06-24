import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const uRLId = 'u3xmmQRbfeB91LfO6ZBo';
const URL = `${baseURL}/apps/${uRLId}/books`;

const initialState = {
  books: [],
  loading: false,
};

const FETCH_BOOKS = 'books/AllBooks';
const ADD_BOOK = 'book/addBook';
const REMOVE_BOOK = 'book/removeBook';

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const rspon = await axios.get(URL);
  const { data } = rspon;
  const books = Object.entries(data).map(([key, value]) => {
    const { title, category, author } = value[0];
    return {
      Id: key,
      title,
      author,
      category,
    };
  });
  return books;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload, thunkAPI) => {
  await axios.post(URL, payload);
  return thunkAPI.dispatch(fetchBooks());
});

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (payload, thunkAPI) => {
    await axios.delete(`${URL}/${payload}`);
    return thunkAPI.dispatch(fetchBooks());
  },
);

const apiPushBook = createSlice({
  name: 'booksRedcuer',
  initialState,
  reducers: {},
  extraReducers: {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    [fetchBooks.pending]: (state) => {
      state.loading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default apiPushBook.reducer;
