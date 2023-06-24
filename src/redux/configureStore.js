import { configureStore, combineReducers } from '@reduxjs/toolkit';
import apiPushBook from './fetchBooks';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  books: apiPushBook,
  categories: categoriesReducer,
});

const store = configureStore({
  reducer,
});

export default store;
