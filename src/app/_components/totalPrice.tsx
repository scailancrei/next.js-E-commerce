import { useContext } from "react"
import { CartTotalPriceContext } from "@/context/useCartTotalPriceContext"

export default function TotalPrice() {
  const { cartTotalPrice } = useContext(CartTotalPriceContext)

  return (
    <div className="">
      <span>Total Price: </span>
      <span className="text-sm ">{cartTotalPrice}</span>
    </div>
  )
}
