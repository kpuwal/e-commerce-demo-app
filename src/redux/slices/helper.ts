import { AttributesType, CartItemType, PriceType } from '../../types';

export function getDefaultAttributes(arr: AttributesType[]) {
  const attributesArr = arr.map((item: AttributesType) => {
    return {[item.name]: item.items[0].id}})
  return Object.assign({}, ...attributesArr);
}

export function isDuplicate(arr: CartItemType[], id: string) {
  const findDoubles = arr.filter((item: CartItemType) => item.product.id === id)
  return (findDoubles.length !== 0);
}

export function findItem(arr: CartItemType[], id: string) {
  return arr.findIndex((item: CartItemType) => item.product.id === id);
}

export function increaseTotalPrice(totalPrice: PriceType[], itemPrice: PriceType[]) {
  return totalPrice.map((item: PriceType, idx: number) =>  {
    const rounded = Math.round(((item.amount + itemPrice[idx].amount)+ Number.EPSILON)*100)/100
    return {...item, amount: rounded}});
}

export function decreaseTotalPrice(totalPrice: PriceType[], itemPrice: PriceType[]) {
  return totalPrice.map((item: PriceType, idx: number) =>  {
    const rounded = Math.round(((item.amount - itemPrice[idx].amount)+ Number.EPSILON)*100)/100
    return {...item, amount: rounded}});
}

export function refreshTax(arr: PriceType[]) {
  return arr.map((item: PriceType) =>  {
    const rounded = Math.round(((item.amount * 0.21)+ Number.EPSILON)*100)/100
    return {...item, amount: rounded}
})}
