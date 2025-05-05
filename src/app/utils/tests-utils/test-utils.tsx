import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"

import { ThemeContext } from "@/context/useThemeContext"
import { UserContext } from "@/context/useUserContext"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import { CartListContext } from "@/context/useCartListContext"
import { AllTheProvidersProps, ProductType, UserType } from "@/types/types"

const AllTheProviders = ({
  children,
  productsCart = [],
  user,
  theme = "dark",
}: AllTheProvidersProps) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme() {} }}>
      <CartListContext.Provider
        value={{ cartListState: false, setCartListState() {} }}
      >
        <UserContext.Provider value={{ currentUser: user, setUser() {} }}>
          <ProductsCartContext.Provider
            value={{
              productsCart,
              setProductsCart: () => {},
            }}
          >
            {children}
          </ProductsCartContext.Provider>
        </UserContext.Provider>
      </CartListContext.Provider>
    </ThemeContext.Provider>
  )
}

// Type of the custom render function
// This function will be used to render the components in the tests

type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
  productsCart?: ProductType[]
  user?: UserType
  theme?: string
}

const customRender = (
  ui: ReactElement,
  { productsCart = [], user = undefined, ...options }: CustomRenderOptions
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <AllTheProviders productsCart={productsCart} user={user}>
        {children}
      </AllTheProviders>
    ),
    ...options,
  })

export * from "@testing-library/react"
export { customRender as render }
