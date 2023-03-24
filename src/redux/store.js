import { configureStore } from '@reduxjs/toolkit';
import BookSlice from './Book/BookSlice';
import BookdetailSlice from './Book/BookdetailSlice';

const store = configureStore({
  reducer: {
    book: BookSlice,
    bookDetails: BookdetailSlice,
  },
});
export default store;
