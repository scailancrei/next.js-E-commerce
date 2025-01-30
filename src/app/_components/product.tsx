"use client"
import { useContext } from "react"
import Card from "./card"
import Image from "next/image"
import { ThemeContext } from "@/context/useThemeContext"
type ProductProps = {
  product: { title: string; price: number; image: string }
}

const Product = ({ product }: ProductProps) => {
  const { theme } = useContext(ThemeContext)
  const { title, price, image } = product
  return (
    <Card
      styles={` ${
        theme === "light" ? "text-dark " : "text-white"
      } flex items-center hover:box-decoration-clone grow gap-4 p-4 dark:bg-gray-600/50 bg-gray-200/50 border-solid border-2 rounded-3x1 hover:shadow-md hover:shadow hover:container hover:ease-in duration-300`}
    >
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-1/4 aspect-auto"
      />
      <div className="container  sm:shrink shadow-2xl">
        <h2 className="text-xs font-bold">{title}</h2>
        <p className="text-sm">{price}€</p>
      </div>
    </Card>
  )
}

export default Product
