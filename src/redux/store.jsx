import { configureStore } from '@reduxjs/toolkit';

import currenciesSlice from './currencies/reducer';

const store = configureStore({
  reducer: {
    currencies: currenciesSlice,
  },
});

export default store;
