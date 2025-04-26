import { User } from "@supabase/supabase-js"
import { Dispatch } from "react"

export type handleToRemoveFromCart = (
  e: React.MouseEvent<HTMLButtonElement>,
  product: ProductType
) => void
export type handleAddToCart = (
  e: React.MouseEvent<HTMLButtonElement>,
  product: ProductType
) => void
export type ProductFunctions = {
  // Type of functions to ADD or Remove from cart
  handleFunction: handleToRemoveFromCart | handleAddToCart
}

export type ProductProps = {
  product: ProductType
  handleFunction: ProductFunctions["handleFunction"]
  children?: React.ReactNode
}
export type UserType = {
  user: User | undefined
}

export interface UserContextType {
  currentUser: UserType | undefined
  setUser: (currentUser: UserType | undefined) => void
}

export type ProductsCartContextType = {
  productsCart: ProductType[]
  setProductsCart: React.Dispatch<React.SetStateAction<ProductType[]>>
}

export interface ProductType {
  id: number
  name: string
  title: string
  price: number
  image: string
  description: string
}

export type CartListProps = {
  handleCartList: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>
}

export type CartProps = {
  children?: React.JSX.Element
  handleCartList: React.MouseEventHandler<HTMLButtonElement>
  styles?: any
}

export type ListProps = {
  children: (item: ProductType) => React.JSX.Element
  array: Record<string, ProductType>[] | ProductType[]
}

export type CartTotalPriceContextType = {
  cartTotalPrice: number
  setCartTotalPrice: (currentTotalPrice: number, product: ProductType) => number
}

export type State = true | false
