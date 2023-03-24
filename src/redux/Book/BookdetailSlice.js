import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBookDetails = createAsyncThunk(
  'Book/Bookdata',
  async (id) => {
    const response = await fetch(`https://example-data.draftbit.com/books/${id}`).then((resp) => resp.json());
    return response;
  },
);
const initialState = {
  bookDetails: [],
  isLoading: false,
};
const BookDetailSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBookDetails.fulfilled, (state, action) => (
        {
          ...state,
          bookDetails: action.payload,
          isLoading: false,
        }
      ))
      .addCase(fetchBookDetails.rejected, (state, action) => {
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
export default BookDetailSlice.reducer;
