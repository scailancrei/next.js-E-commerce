import React, { JSX, useContext } from "react"
import { ShoppingCartIcon } from "@/_components/icons"
import UseIconContext from "@/context/useIconContext"
import Button from "@/_components/button"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import { CartProps } from "@/types/types"

export default function Cart({
  children,
  styles,
  handleCartList,
}: CartProps): JSX.Element {
  if (!handleCartList) {
    throw new Error(
      "handleCartList function is required to render the Cart component"
    )
  }
  const { productsCart } = useContext(ProductsCartContext)

  return (
    <div className="justify-self-center">
      <div className=" top-0 right-0 w-12 h-7 0  flex justify-center items-center">
        {children}
        <span className="text-sm absolute">{productsCart.length}</span>
        <Button typeButton="button" handleClick={handleCartList}>
          <UseIconContext styles={styles}>
            <ShoppingCartIcon />
          </UseIconContext>
        </Button>
      </div>
    </div>
  )
}
