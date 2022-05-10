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

type AddToCartTypes = {
  product: ProductType,
  selectedAttributes?: {},
  count?: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [] as CartItemType[],
    quantity: 0,
    totalPrice: initPrice,
    tax: initPrice,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartTypes>) => {
      const { product, selectedAttributes, count } = action.payload;
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
      state.totalPrice = refreshTotalPrice(state.totalPrice, product.prices);
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
