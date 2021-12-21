import { createSlice } from "@reduxjs/toolkit";
import { thunkfetchQuotes } from "./currencies-operations";

const initialState = {
  dataCurrencies: [],
  isLoading: false,
  error: null,
  dateUpdate: null,
  baseCurrency: null,
};

const currencySlice = createSlice({
  name: "currenties",
  initialState,
  extraReducers: {
    [thunkfetchQuotes.pending](state) {
      state.isLoading = true;
    },
    [thunkfetchQuotes.fulfilled](state, action) {
      state.isLoading = false;
      state.dataCurrencies = action.payload.dataNormalize;
      state.baseCurrency = action.payload.base_code;
      state.dateUpdate = new Date().toLocaleDateString();
    },
    [thunkfetchQuotes.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
