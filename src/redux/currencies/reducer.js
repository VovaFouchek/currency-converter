import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencies } from './action';

const initialState = {
  currencies: [],
  isLoading: false,
  error: '',
};

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

// export const {} = currenciesSlice.actions;
export default currenciesSlice.reducer;
