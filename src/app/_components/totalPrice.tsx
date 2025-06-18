import { useContext } from "react"
import { CartTotalPriceContext } from "@/context/useCartTotalPriceContext"

export default function TotalPrice() {
  const { cartTotalPrice } = useContext(CartTotalPriceContext)

  return (
    <div className="flex font-bold text-lg justify-evenly items-center p-4 w-1/2">
      <span>Total Price: </span>
      <span>{cartTotalPrice.toFixed(2)}€</span>
    </div>
  )
}
