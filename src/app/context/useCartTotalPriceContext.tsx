import { createContext, Dispatch } from "react"
import { CartTotalPriceContextType, ProductType } from "@/types/types"

export const CartTotalPriceContext = createContext<CartTotalPriceContextType>({
  cartTotalPrice: 0,
  setCartTotalPrice: (cartTotalPrice: number, product: ProductType) =>
    Number((cartTotalPrice - product.price) | (cartTotalPrice + product.price)),
})
