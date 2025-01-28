"use client"
import Card from "./card"
import Image from "next/image"
type ProductProps = {
  product: { title: string; price: number; image: string }
}

const Product = ({ product }: ProductProps) => {
  const { title, price, image } = product
  return (
    <Card styles="flex items-center box-decoration-clone grow-0 gap-4 p-4 bg-gray-100 border-solid border-2 rounded-3x1 shadow-md  hover:top-0 hover:bottom-0 hover:right-0 hover:left-0 hover:shadow-2xl hover:container hover:ease-in duration-2000">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-1/4 aspect-auto"
      />
      <div className="container sm:flex-shrink">
        <h2 className="text-xs font-bold">{title}</h2>
        <p className="text-sm">{price}€</p>
      </div>
    </Card>
  )
}

export default Product
