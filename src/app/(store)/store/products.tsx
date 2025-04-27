import React, { useEffect, useState, useContext } from "react"
import List from "@/_components/list"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import { CartTotalPriceContext } from "@/context/useCartTotalPriceContext"
import Product from "@/_components/product"
import { handleAddToCart, ProductType } from "@/types/types"
import { getAllProducts } from "app/services/api"

export default function Products(): React.ReactElement {
  const [productsList, setProductsList] = useState<ProductType[]>()
  const { productsCart, setProductsCart } = useContext(ProductsCartContext)
  const { cartTotalPrice, setCartTotalPrice } = useContext(
    CartTotalPriceContext
  )
  const handleAddToCart: handleAddToCart = (e, product) => {
    e.preventDefault()
    setProductsCart([...productsCart, product])
    setCartTotalPrice(cartTotalPrice + product.price, product)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllProducts()

        setProductsList(response)
      } catch (error) {
        throw error
      }
    }
    fetchData()
  }, [])

  return productsList === undefined ? (
    <div>Loading...</div>
  ) : (
    <ul className="list-disc list-inside">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        <List array={productsList}>
          {(items) => (
            <Product handleFunction={handleAddToCart} product={items}>
              Add To Cart
            </Product>
          )}
        </List>
      </div>
    </ul>
  )
}
