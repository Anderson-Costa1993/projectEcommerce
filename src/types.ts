
export type ProductsType = {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    rate: number,
    count:  number,
  }
  title: string,
  quantity: number
};

export type CartItemType  = {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
  count:  number,
  }
  title: string,
  quantityCart: number
}

export type CategoryType = string[];