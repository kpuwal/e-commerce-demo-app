import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, AttributesType, CartType, PriceType } from '../../types';

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
    items: [] as CartType[],
    quantity: 0,
    totalPrice: initPrice,
    tax: initPrice,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      if (isDuplicate(state.items, action.payload.id)) {
        const idx = findItem(state.items, action.payload.id);
        state.items[idx].count += 1;
        state.quantity += 1;
        state.totalPrice = refreshTotalPrice(state.totalPrice, action.payload.prices);
        state.tax = refreshTax(state.totalPrice);
      } else {
        state.items.push({
          product: action.payload,
          selectedAttributes: getDefaultAttributes(action.payload.attributes),
          count: 1
        });
        state.quantity += 1;
        state.totalPrice = refreshTotalPrice(state.totalPrice, action.payload.prices);
        state.tax = refreshTax(state.totalPrice);
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

function isDuplicate(arr: CartType[], id: string) {
  const findDoubles = arr.filter((item: any) => item.product.id === id);
  return (findDoubles.length !== 0);
}

function findItem(arr: CartType[], id: string) {
  return arr.findIndex((item: any) => item.product.id === id);
}

function refreshTotalPrice(oldArr: PriceType[], newArr: PriceType[]) {
  return oldArr.map((item: any, idx: number) =>  {
    return {...item, amount: item.amount + newArr[idx].amount}});
}

function refreshTax(arr: PriceType[]) {
  return arr.map((item: any) =>  {
    return {...item, amount: Math.round(((item.amount * 0.21) + Number.EPSILON) * 100) / 100}});
}

const { actions, reducer } = cartSlice;
export const { addToCart, updateCount } = actions;
export default reducer;
