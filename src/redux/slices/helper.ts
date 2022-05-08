import { AttributesType } from '../../types';

export const itemInitState = {
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

export const selAttrInitState = [{
  id: '',
  name: '',
  type: '',
  items: { displayValue: '', value: '', id: '' }
}]

export function getDefaultAttributes(arr: AttributesType[]) {
  return arr.map((item: AttributesType) => {
    return {...item, items: item.items[0]}
  })
}