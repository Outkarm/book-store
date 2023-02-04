import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusCheck: () => ({
      message: 'Under construction',
    }),
  },
});

export const { statusCheck } = categorySlice.actions;

export default categorySlice.reducer;
