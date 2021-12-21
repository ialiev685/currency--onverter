import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuotes } from "../services";

export const thunkfetchQuotes = createAsyncThunk(
  "currencies/fetchQuotes",
  async (baseCurrency, thunkAPI) => {
    try {
      console.log(new Date().toLocaleDateString());

      const state = thunkAPI.getState();

      console.log(state);
      const response = await fetchQuotes(baseCurrency);

      if (response.conversion_rates) {
        const data = response.conversion_rates;
        const dataNormalize = Object.entries(data)
          .map(([key, value]) => ({
            currency: key,
            value: value,
          }))
          .filter(({ currency }) => ["EUR", "USD", "RUB"].includes(currency));
        return dataNormalize;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
