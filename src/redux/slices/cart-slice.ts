import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, AttributesType, CartType } from '../../types';

const initialState: CartType = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const selectedAttributes = getDefaultAttributes(action.payload.attributes)
      state.items.push({
        product: action.payload,
        selectedAttributes: selectedAttributes,
      })
    },
  },
})

function getDefaultAttributes(arr: AttributesType[]) {
  return arr.map((item: AttributesType) => {
    return {...item, items: item.items[0]}
  })
}

const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
