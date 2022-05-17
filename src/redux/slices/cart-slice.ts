import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, PriceType } from '../../types';
import {isDuplicate, getDefaultAttributes, findItem, increaseTotalPrice, decreaseTotalPrice, refreshTax} from './helper';

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
    isMiniOn: false
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const { product, selectedAttributes } = action.payload;
      if (isDuplicate(state.items, product.id)) {
        const idx = findItem(state.items, product.id);
        state.items[idx].count += 1;
      } else {
        state.items.push({
          product: product,
          selectedAttributes: !selectedAttributes ? getDefaultAttributes(product.attributes) : selectedAttributes,
          count: 1
        });
      }
      state.quantity += 1;
      state.totalPrice = increaseTotalPrice(state.totalPrice, product.prices);
      state.tax = refreshTax(state.totalPrice);
    },
    updateAttributes: (state, action) => {
      const { name, value, idx } = action.payload
      state.items[idx].selectedAttributes = {...state.items[idx].selectedAttributes, [name]: value}
    },
    updateCount: (state, action) => {
      const { actionType, idx } = action.payload;
      if (actionType === 'increment') {
        state.items[idx].count += 1
        state.quantity += 1
        state.totalPrice = increaseTotalPrice(state.totalPrice, state.items[idx].product.prices);
      } else {
        state.items[idx].count -= 1
        state.quantity -= 1
        state.totalPrice = decreaseTotalPrice(state.totalPrice, state.items[idx].product.prices);
      }
      state.tax = refreshTax(state.totalPrice);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },
    showMiniCart: (state) => {
      console.log(state.isMiniOn, ' from state')
      state.isMiniOn = !state.isMiniOn;
    }
  },
})

const { actions, reducer } = cartSlice;
export const { addToCart, removeFromCart, updateCount, updateAttributes, showMiniCart } = actions;
export default reducer;
