import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://example-data.draftbit.com/books?_limit50';
export const fetchBooks = createAsyncThunk(
  'Book/Bookdetails',
  async () => {
    const response = await (await fetch(baseUrl)).json();
    return response;
  },
);
const initialState = {
  books: [],
  isLoading: false,
};
const BookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const Data = action.payload;
        const newArray = [];
        Data.map((book) => {
          newArray.push({
            id: book.id,
            title: book.title,
            authors: book.author,
            description: book.description,
            image_url: book.image_url,
            genres: book.genres,
          });
          return newArray;
        });
        newState.books = newArray;
        return newState;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        const newState = {
          ...state,
          state: 'failed',
          error: action.error.message,
        };
        return newState;
      });
  },
});
// export const { updateData, rocketreserve } = RocketDataSlice.actions;
export default BookSlice.reducer;
