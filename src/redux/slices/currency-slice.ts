import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currencies: [],
    activeCurrency: 'USD',
  },
  reducers: {
    changeCurrency: (state, action: PayloadAction<string>) => {
      state.activeCurrency = action.payload
    },
  },
})

const { actions, reducer } = currencySlice;

export const { changeCurrency } = actions;
export default reducer;
