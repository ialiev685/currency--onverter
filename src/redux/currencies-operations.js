import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchQuotes } from "../services";

export const thunkfetchQuotes = createAsyncThunk(
  "currencies/fetchQuotes",
  async (baseCurrency, thunkAPI) => {
    try {
      const dateToday = new Date().toLocaleDateString();

      const {
        dateUpdate,
        baseCurrency: oldBaseCurrency,
        dataCurrencies,
      } = thunkAPI.getState();

      if (dateUpdate === dateToday && baseCurrency === oldBaseCurrency) {
        const oldData = {};
        oldData.base_code = baseCurrency;
        oldData.dataNormalize = dataCurrencies;

        return oldData;
      }
      const response = await fetchQuotes(baseCurrency);

      if (response.conversion_rates) {
        const data = response.conversion_rates;

        const dataNormalize = Object.entries(data)
          .map(([key, value]) => ({
            currency: key,
            value: value,
          }))
          .filter(({ currency }) => ["EUR", "USD", "RUB"].includes(currency));
        delete response.conversion_rates;
        response.dataNormalize = dataNormalize;
        return response;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
