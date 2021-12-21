import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuotes } from "../services";

export const thunkfetchQuotes = createAsyncThunk(
  "currencies/fetchQuotes",
  async (baseCurrency, thunkAPI) => {
    try {
      const dateToday = new Date().toLocaleDateString();

      const state = thunkAPI.getState();

      if (state.dateUpdate === dateToday) {
        return state.dataCurrencies;
      }
      const response = await fetchQuotes(baseCurrency);
      console.log("Запрос продолжается");
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
