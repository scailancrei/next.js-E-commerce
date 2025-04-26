"use client"
import { createContext } from "react"
import { ProductsCartContextType } from "@/types/types"

export const ProductsCartContext = createContext<ProductsCartContextType>({
  productsCart: [],
  setProductsCart: () => {},
})
