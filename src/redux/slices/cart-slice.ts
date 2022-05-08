import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, AttributesType, SelectedAttributesType } from '../../types';

const productInitialState = {
  id: '',
  name: '',
  inStock: true,
  gallery: [''],
  description: '',
  category: '',
  attributes: [{
    id: '',
    name: '',
    type: '',
    items: [{ displayValue: '', value: '', id: '' }],
  }],
  prices: [{
    currency: { label: '', symbol: '' },
    amount: 0
  }],
  brand: '',
}

const attributesInitState = [{
  id: '',
  name: '',
  type: '',
  items: { displayValue: '', value: '', id: '' }
}]

type CartType = {
  items: [{
    item: ProductType,
    selectedAttributes: SelectedAttributesType[]
  }]
}

const initialState: CartType = {
  items: [{
    item: productInitialState,
    selectedAttributes: attributesInitState
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

function getDefaultAttributes(arr: AttributesType[]) {
  const defaultAttr = arr.map((item: AttributesType) => {
    return {...item, items: item.items[0]}
  })
  return defaultAttr;
}

const { actions, reducer } = cartSlice;
export const { addToCart } = actions;
export default reducer;
