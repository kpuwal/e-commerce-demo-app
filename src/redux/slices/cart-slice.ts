import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, SelectedAttributesType } from '../../types';
import { itemInitState, selAttrInitState, getDefaultAttributes } from './helper';

type CartType = {
  items: [{
    item: ProductType,
    selectedAttributes: SelectedAttributesType[]
  }]
}

const initialState: CartType = {
  items: [{
    item: itemInitState,
    selectedAttributes: selAttrInitState
  }]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const selectedAttributes = getDefaultAttributes(action.payload.attributes)
      state.items.push({
        item: action.payload,
        selectedAttributes: selectedAttributes,
      })
    },
  },
})

const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
