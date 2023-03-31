import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

import { CURRENCIES_FETCH } from '../action-type';
import { API } from '@/utils/api/config/axios';

export const fetchCurrencies = createAsyncThunk(CURRENCIES_FETCH, async () => {
  try {
    const { data } = await axios.get(API.CURRENCIES);
    return data.rates;
  } catch (error) {
    throw isRejectedWithValue(error.message);
  }
});
