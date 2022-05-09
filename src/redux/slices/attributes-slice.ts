import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const attributesSlice = createSlice({
  name: 'currency',
  initialState: [{
    selectedAttributes: {
      id: '',
      name: '',
      type: '',
      items: {
        displayValue: '',
        value: '',
        id: '' 
      }
    }
  }],
  reducers: {
    changeAttributes: (state, action: PayloadAction<string>) => {
      // state.activeCurrency = action.payload
    },
  },
})

const { actions, reducer } = attributesSlice;
export const { changeAttributes } = actions;
export default reducer;
