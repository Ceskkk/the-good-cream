export interface IMenuItem {
  id: number
  name: string
  link: string
}

export interface IProductType {
  id: number
  title: string
  alt: string
  img: string
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  category: string
  img: string
}
