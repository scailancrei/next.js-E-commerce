import { createContext } from "react"
import { CartTotalPriceContextType } from "@/types/types"

export const CartTotalPriceContext = createContext<CartTotalPriceContextType>({
  cartTotalPrice: 0,
  setCartTotalPrice: () => {},
})
