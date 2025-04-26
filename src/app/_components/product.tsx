"use client"
import { useContext } from "react"
import Card from "./card"
import Image from "next/image"
import Button from "@/_components/button"
import { ThemeContext } from "@/context/useThemeContext"
import { ProductProps } from "@/types/types"

const Product = ({ product, children, handleFunction }: ProductProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card
      styles={` ${
        theme === "light" ? "text-dark " : "text-white"
      } flex items-center hover:box-decoration-clone grow  gap-4 p-4  border-b-black bg-gray-200/50 border-solid border-2 rounded-3x1 hover:shadow-md hover:shadow hover:container hover:ease-in duration-300`}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="w-1/4 aspect-auto"
      />
      <div className="container  sm:shrink">
        <h2 className="text-xs font-bold">{product.title}</h2>
        <p className="text-sm">{product.price}€</p>
      </div>
      <Button
        handleClick={(e) => handleFunction(e, product)}
        typeButton="button"
        styles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 md:py-1 md:px-1 rounded-sm items-center w-1/2"
      >
        {children}
      </Button>
    </Card>
  )
}

export default Product
