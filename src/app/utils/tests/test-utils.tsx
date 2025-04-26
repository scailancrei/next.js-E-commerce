import React, { ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"

import { ThemeContext } from "@/context/useThemeContext"
import { UserContext } from "@/context/useUserContext"
import { ProductsCartContext } from "@/context/useProductsCartContext"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme() {} }}>
      <UserContext.Provider value={{ currentUser: undefined, setUser() {} }}>
        <ProductsCartContext.Provider
          value={{
            productsCart: [
              {
                id: 1,
                name: "Product 1",
                price: 10,
                description: "Product 1 description",
                image: "https://i.imgur.com/6wj0x2b.jpg",
                title: "Product 1",
              },
            ],
            setProductsCart: () => {},
          }}
        >
          {children}
        </ProductsCartContext.Provider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }
