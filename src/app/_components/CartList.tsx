"use client"
import React, { useContext } from "react"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import { CartTotalPriceContext } from "@/context/useCartTotalPriceContext"
import { ThemeContext } from "@/context/useThemeContext"
import { CloseIcon } from "./icons"
import { CartListProps, handleToRemoveFromCart } from "@/types/types"
import List from "./list"
import Button from "./button"
import Product from "./product"
import TotalPrice from "./totalPrice"

export default function CartList({
  handleCartList,
}: CartListProps): React.ReactElement {
  const { productsCart, setProductsCart } = useContext(ProductsCartContext)
  const { cartTotalPrice, setCartTotalPrice } = useContext(
    CartTotalPriceContext
  )

  const { theme } = useContext(ThemeContext)

  console.log("Total actual: ", cartTotalPrice)

  // remove product from cart
  const handleToRemoveFromCart: handleToRemoveFromCart = (product, index) => {
    setCartTotalPrice(product, "remove")
    const newArray = [...productsCart]
    newArray.splice(index, 1)
    setProductsCart(newArray)
  }

  return (
    <div className="fixed inset-0 z-10 bg-gray-500/75  transition-opacity duration-700 ease-in-out">
      <div
        className={`float-end  w-1/6 h-full ${
          theme === "light" ? "text-dark bg-white" : "text-white bg-black"
        }`}
      >
        <div className="flex items-center justify-evenly gap-4 p-4">
          <h2 id="title" className="text-5xl text-center">
            Cart
          </h2>
          <Button typeButton="button" handleClick={handleCartList}>
            <CloseIcon />
          </Button>
        </div>
        <div className="flex flex-col gap-6 items-baseline">
          <List array={productsCart}>
            {(product, index) => (
              <div className="flex justify-center items-center">
                {
                  <Product
                    handleFunction={() =>
                      handleToRemoveFromCart(product, index)
                    }
                    product={product}
                  >
                    delete from cart
                  </Product>
                }
              </div>
            )}
          </List>
          <TotalPrice />
        </div>
      </div>
    </div>
  )
}
