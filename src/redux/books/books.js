// Actions
const ADDED_BOOK = 'book-store/src/redux/books/ADDED_BOOK';
const REMOVED_BOOK = 'book-store/src/redux/books/REMOVED_BOOK';

// initialState
const initialState = {
  books: [
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
  ],
};

// Action creators
export const addBook = (newBook) => ({ type: ADDED_BOOK, newBook });
export const removeBook = (id) => ({ type: REMOVED_BOOK, id });

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_BOOK:
      return {
        ...state,
        books: [...state.books, action.newBook],
      };
    case REMOVED_BOOK:
      return {
        ...state,
        books: [...state.books.filter((book) => book.id !== action.id)],
      };
    default:
      return state;
  }
};

export default booksReducer;
