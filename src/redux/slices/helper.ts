import { AttributesType, CartType, PriceType } from '../../types';

export function getDefaultAttributes(arr: AttributesType[]) {
  return arr.map((item: AttributesType) => {
    return {...item, items: item.items[0]}
  })
}

export function isDuplicate(arr: CartType[], id: string) {
  const findDoubles = arr.filter((item: any) => item.product.id === id);
  return (findDoubles.length !== 0);
}

export function findItem(arr: CartType[], id: string) {
  return arr.findIndex((item: any) => item.product.id === id);
}

export function refreshTotalPrice(oldArr: PriceType[], newArr: PriceType[]) {
  return oldArr.map((item: any, idx: number) =>  {
    return {...item, amount: item.amount + newArr[idx].amount}});
}

export function refreshTax(arr: PriceType[]) {
  return arr.map((item: any) =>  {
    return {...item, amount: Math.round(((item.amount * 0.21) + Number.EPSILON) * 100) / 100}});
}