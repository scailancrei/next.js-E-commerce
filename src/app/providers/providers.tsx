"use client"
import { useState } from "react"
import { ThemeContext } from "@/context/useThemeContext"
import { UserContext } from "@/context/useUserContext"
import { ProductType, UserType, Theme } from "@/types/types"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import { CartListContext } from "@/context/useCartListContext"
import { CartTotalPriceContext } from "@/context/useCartTotalPriceContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [cartListState, setCartListState] = useState<boolean>(false)
  const [actualUser, setActualUser] = useState<UserType>()
  const [currentTotalPrice, setCurrentTotalPrice] = useState<number>(0)
  const [products, setProducts] = useState<ProductType[]>([])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const saveUser = (user: UserType | undefined) => {
    setActualUser(user)
  }

  const handleCartListState = () => {
    setCartListState(!cartListState)
  }

  const sumTotalPrice = (product: ProductType) => {
    console.log("Sumando precio: ", product.price)
    console.log("Precio total: ", currentTotalPrice)
    setCurrentTotalPrice(currentTotalPrice + product.price)
  }

  const minusTotalPrice = (product: ProductType) => {
    setCurrentTotalPrice(currentTotalPrice - product.price)
  }

  // Handle total price with actions
  const setCartTotalPrice = (
    product: ProductType,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      sumTotalPrice(product)
    } else if (action === "remove") {
      minusTotalPrice(product)
    }
  }

  return (
    <CartTotalPriceContext.Provider
      value={{
        cartTotalPrice: currentTotalPrice,
        setCartTotalPrice,
      }}
    >
      <CartListContext.Provider
        value={{
          cartListState: cartListState,
          setCartListState: handleCartListState,
        }}
      >
        <UserContext.Provider
          value={{ currentUser: actualUser, setUser: saveUser }}
        >
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ProductsCartContext.Provider
              value={{ productsCart: products, setProductsCart: setProducts }}
            >
              {children}
            </ProductsCartContext.Provider>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </CartListContext.Provider>
    </CartTotalPriceContext.Provider>
  )
}
