import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItemType } from '../../types';

export const attributesSlice = createSlice({
  name: 'attributes',
  initialState: {
    selectedAttributes: [
      {
        id: '',
        name: '',
        type: '',
        items: {
          displayValue: '',
          value: '',
          id: '',
          isSelected: false
        }
    }
  ]
  },
  reducers: {
    addAttributes: (state, action: PayloadAction) => {
      // state.selectedAttributes.push(action.payload)
    },
  },
})

const { actions, reducer } = attributesSlice;
export const { addAttributes } = actions;
export default reducer;
