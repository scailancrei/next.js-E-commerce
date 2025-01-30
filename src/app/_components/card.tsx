import Button from "./button"
import { RemoveFromCart, AddToCart } from "./icons"

interface CardProps {
  children: React.ReactNode
  styles: string
}

const Card = ({ children, styles }: CardProps) => {
  return (
    <li className={styles}>
      {children}

      <Button
        typeButton="button"
        styles="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-sm items-center w-1/2"
      >
        Add to cart
      </Button>
    </li>
  )
}

export default Card
