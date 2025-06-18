"use client"
import React, { useContext } from "react"
import { useRouter } from "next/navigation"
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
  handleCartListState,
}: CartListProps): React.ReactElement {
  const router = useRouter()
  const { productsCart, setProductsCart } = useContext(ProductsCartContext)
  const { setCartTotalPrice } = useContext(CartTotalPriceContext)

  const { theme } = useContext(ThemeContext)

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
        className={`grid grid-cols-1 w-full md:w-1/2 h-full  float-right animate-slide-in-right ${
          theme === "light" ? "text-dark bg-white" : "text-white bg-black"
        }`}
      >
        <div className="flex align-top items-start justify-evenly gap-10 p-4">
          <h2 id="title" className="text-5xl text-center">
            Cart
          </h2>
          {/* Close cart list */}
          <Button
            title="close cart"
            styles="hover:bg-gray-400 hover:text-black text-white bg-gray-500 rounded-full p-2"
            typeButton="button"
            handleClick={handleCartListState}
          >
            <CloseIcon />
          </Button>
        </div>

        {productsCart.length === 0 ? (
          <div className="flex justify-center  h-full text-2xl font-bold text-gray-500">
            Your cart is empty
          </div>
        ) : (
          <div
            className={`flex flex-col gap-6 items-center overflow-y-auto ${
              theme === "light"
                ? "border-b-4 border-black "
                : "border-b-4 border-white"
            } `}
          >
            <List array={productsCart}>
              {(product, index) => (
                <div className="flex w-full max-w-full justify-center items-center object-contain">
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
            <Button
              title="Checkout"
              handleClick={() => router.push("/checkout")}
              typeButton="button"
              styles="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
