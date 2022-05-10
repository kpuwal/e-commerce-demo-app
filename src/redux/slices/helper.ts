import { AttributesType, CartAttributesType, CartItemType, PriceType, ProductType, ItemsType, CartProductType } from '../../types';

export function getDefaultAttributes(arr: AttributesType[]) {
  const attributesArr = arr.map((item: AttributesType) => {
    return {[item.name]: item.items[0].id}})
  return Object.assign({}, ...attributesArr);
}

export function isDuplicate(arr: CartItemType[], id: string) {
  const findDoubles = arr.filter((item: CartItemType) => item.product.id === id);
  return (findDoubles.length !== 0);
}

export function findItem(arr: CartItemType[], id: string) {
  return arr.findIndex((item: CartItemType) => item.product.id === id);
}

export function refreshTotalPrice(oldArr: PriceType[], newArr: PriceType[]) {
  return oldArr.map((item: PriceType, idx: number) =>  {
    const rounded = Math.round(((item.amount + newArr[idx].amount)+ Number.EPSILON)*100)/100
    return {...item, amount: rounded}});
}

export function refreshTax(arr: PriceType[]) {
  return arr.map((item: PriceType) =>  {
    const rounded = Math.round(((item.amount * 0.21)+ Number.EPSILON)*100)/100
    return {...item, amount: rounded}
})}


// export function mapCartAttributes(attributes: AttributesType[]): CartAttributesType[] {
//   return attributes.map((attr: AttributesType) => {
//     return {
//       ...attr,
//       items: attr.items.map((item: ItemsType) => {
//         return {
//           ...item,
//           isSelected: false
//         }
//     })}
//   })
// }

// export function createCartItem(product: ProductType): CartProductType {
//   const attributes = mapCartAttributes(product.attributes);
//   return {
//     ...product,
//     attributes,
//   }
// }
