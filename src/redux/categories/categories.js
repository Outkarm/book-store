// Action
const CHECKED_STATUS = 'book-store/src/redux/categories/CHECK_STATUS';

// initialState
const initialState = { categories: [] };

// Action creator
export const statusCheck = () => ({ type: CHECKED_STATUS });

// Reducer
const categoriesReducer = (state = initialState, action) => {
  if (action.type === CHECKED_STATUS) {
    return 'Under Construction';
  }
  return state;
};

export default categoriesReducer;
