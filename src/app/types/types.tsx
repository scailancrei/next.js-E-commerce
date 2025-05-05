import { JSX } from "react"
import { User } from "@supabase/supabase-js"

export type Theme = "light" | "dark"

export type ButtonProps = {
  children?: JSX.Element | React.ReactNode
  typeButton: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  styles?: string
  idButton?: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type handleToRemoveFromCart = (
  product: ProductType,
  index: number
) => void

export type handleAddToCart = (product: ProductType) => void

export type ProductFunctions = {
  // Type of functions to ADD or Remove from cart
  handleFunction: handleToRemoveFromCart | handleAddToCart
}

export type ProductProps = {
  product: ProductType
  handleFunction: (product: ProductType, index?: number) => void
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
  children: (item: ProductType, index: number) => React.ReactNode
  array: ProductType[]
}
export type CartTotalPriceAction = "add" | "remove"

export type CartTotalPriceContextType = {
  cartTotalPrice: number
  setCartTotalPrice: (
    product: ProductType,
    action: CartTotalPriceAction
  ) => void
}

export type State = true | false

// Test-utils Providers type
export type AllTheProvidersProps = {
  children: React.ReactNode
  productsCart?: ProductType[]
  user?: any
  theme?: Theme
}
