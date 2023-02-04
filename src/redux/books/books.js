// Actions
const ADDED_BOOK = 'book-store/src/redux/books/ADDED_BOOK';
const REMOVED_BOOK = 'book-store/src/redux/books/REMOVED_BOOK';

// initialState
const initialState = { books: [] };

// Action creators
export const addBook = (newBook) => ({ type: ADDED_BOOK, newBook });
export const removeBook = (id) => ({ type: REMOVED_BOOK, id });

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state, action.newBook],
      };
    case REMOVED_BOOK:
      return {
        ...state,
        books: [...state.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
