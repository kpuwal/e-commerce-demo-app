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

export function isDuplicateWithAttributes(arr: CartItemType[], id: string, attr: any) {
  const findDoubles = arr.filter((item: CartItemType) => item.product.id === id && shallowEqual(item.selectedAttributes, attr))
  return (findDoubles.length !== 0);
}

export function findItem(arr: CartItemType[], id: string) {
  return arr.findIndex((item: CartItemType) => item.product.id === id);
}

export function findItemWithAttributes(arr: CartItemType[], id: string, attr: any) {
  return arr.findIndex((item: CartItemType) => item.product.id === id && shallowEqual(item.selectedAttributes, attr));
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

// export function compareAttributes(arr: CartItemType[], id: string, attr: any) {
//   // console.log('all items', arr);
//   const findDoubles = arr.filter((item: CartItemType) => item.product.id === id && shallowEqual(item.selectedAttributes, attr));
//   console.log(findDoubles.length)
//   // console.log('id ', id)
//   // arr.forEach((item: any) => {
//   //   console.log(shallowEqual(item.selectedAttributes, attr))
//   // })
// }

function shallowEqual(object1: any, object2: any) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}