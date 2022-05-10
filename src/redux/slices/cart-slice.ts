/* Cart shape:
{
  items: {
    product: ProductType,
    selectedAttributes: [{
      id: string,
      name: string,
      type: string,
      items: {
        displayValue: string,
        value: string,
        id: string
        isSelected: boolean
      },
    }],
    count: number
  },
  quantity: number,
  totalPrice: PriceType,
  tax: PriceType
}*/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, CartItemType, PriceType } from '../../types';
import {isDuplicate, getDefaultAttributes, findItem, refreshTotalPrice, refreshTax} from './helper';

const initPrice = [
  {amount: 0, currency: {label: 'USD', symbol: '$'}},
  {amount: 0, currency: {label: 'GBP', symbol: '£'}},
  {amount: 0, currency: {label: 'AUD', symbol: 'A$'}},
  {amount: 0, currency: {label: 'JPY', symbol: '¥'}},
  {amount: 0, currency: {label: 'RUB', symbol: '₽'}},
] as PriceType[]

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItemType[],
    quantity: 0,
    totalPrice: initPrice,
    tax: initPrice,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (isDuplicate(state.items, action.payload.id)) {
        const idx = findItem(state.items, action.payload.id);
        state.items[idx].count += 1;
      } else {
        state.items.push({
          product: action.payload,
          selectedAttributes: getDefaultAttributes(action.payload.attributes),
          count: 1
        });
      }
      state.quantity += 1;
      state.totalPrice = refreshTotalPrice(state.totalPrice, action.payload.prices);
      state.tax = refreshTax(state.totalPrice);
    },
    updateAttributes: (state, action) => {
      const { name, value, idx } = action.payload
      state.items[idx].selectedAttributes = {...state.items[idx].selectedAttributes, [name]: value}
    },
    updateQuantity: (state, action) => {
      console.log("here?")
    },
  },
})

const { actions, reducer } = cartSlice;
export const { addToCart, updateQuantity, updateAttributes } = actions;
export default reducer;
