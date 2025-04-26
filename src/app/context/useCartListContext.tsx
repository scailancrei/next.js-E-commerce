import React, { createContext } from "react"
import { State } from "../types/types"

interface CartListContext {
  cartListState: State
  setCartListState: React.Dispatch<React.SetStateAction<State>>
}
export const CartListContext = createContext<CartListContext>({
  cartListState: false,
  setCartListState: () => {},
})
