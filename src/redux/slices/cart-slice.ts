import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, AttributesType, CartType } from '../../types';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartType[]
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (isDouble(state.items, action.payload.id)) {
        const idx = findItem(state.items, action.payload.id);
        state.items[idx].count += 1
      } else {
        state.items.push({
          product: action.payload,
          selectedAttributes: getDefaultAttributes(action.payload.attributes),
          count: 1
        })
      }
    },
    updateCount: (state, action) => {
      console.log("here?")
    }
  },
})

function getDefaultAttributes(arr: AttributesType[]) {
  return arr.map((item: AttributesType) => {
    return {...item, items: item.items[0]}
  })
}

function isDouble(arr: CartType[], id: string) {
  const findDoubles = arr.filter((item: any) => item.product.id === id);
  return (findDoubles.length !== 0);
}

function findItem(arr: CartType[], id: string) {
  return arr.findIndex((item: any) => item.product.id === id);
}

const { actions, reducer } = cartSlice;
export const { addToCart, updateCount } = actions;
export default reducer;
