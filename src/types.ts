export type PriceType = {
  currency: CurrencyType,
  amount: number,
}

export type AttributeType = {
  displayValue: string,
  value: string,
  id: string,
}

export type AttributeSetType = {
  id: string,
  name: string,
  type: string,
  items: AttributeType[],
}

export type ProductType = {
  id: string,
  name: string,
  inStock: boolean,
  gallery: string[],
  description: string,
  category: string,
  attributes: AttributeSetType[],
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