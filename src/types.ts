export type PriceType = {
  currency: CurrencyType,
  amount: number,
}

export type ItemsType = {
  displayValue: string,
  value: string,
  id: string,
}

export type AttributesType = {
  id: string,
  name: string,
  type: string,
  items: ItemsType[],
}

export type ProductType = {
  id: string,
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  category: string,
  attributes: AttributesType[],
  prices: PriceType[],
  brand: string,
}

export type CategoryType = {
  name: string
  products: ProductType[],
}

export type CurrencyType = {
  label: string,
  symbol: string,
}

export type CategoryInputType = {
  title: string,
}

export type CartAttributesType = {
  id: string,
  name: string,
  type: string,
  items: {
    displayValue: string,
    value: string,
    id: string,
    isSelected?: boolean
  }[],
}

export type CartProductType = {
  id: string,
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  category: string,
  prices: PriceType[],
  brand: string,
  attributes: CartAttributesType[],
}

export type CartItemType = {
  product: CartProductType,
  selectedAttributes: SelectedAttributesType<string>,
  count: number
}

export type SelectedAttributesType<Attr extends string>= {
  [key in Attr]: string
}

export type StyleItem = {
  h3: {fontSize: string },
  h4: {fontSize: string },
  size: string,
  counterWidth: string,
  counterHeight: string,
  attrSize: string,
  useCaps: boolean
}

export type StyleType = {
  product: StyleItem,
  cart: StyleItem,
  miniCart: StyleItem
}

export type valuesTypes = {
  name: string,
  value: string,
  idx: number
}