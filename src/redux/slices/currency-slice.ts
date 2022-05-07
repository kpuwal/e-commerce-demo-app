import { createSlice } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    activeCurrency: 0,
  },
  reducers: {
    changeCurrency: (state, action) => {
      state.activeCurrency = action.payload
    },
  },
})

export const { changeCurrency } = currencySlice.actions;

export default currencySlice.reducer;