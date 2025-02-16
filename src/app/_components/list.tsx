import React from "react"
import Product from "@/_components/product"

type ListProps = {
  products: Array<{ id: number; title: string; price: number; image: string }>
}
const List = ({ products }: ListProps) => {
  return (
    <ul className="list-disc list-inside">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </ul>
  )
}

export default List
