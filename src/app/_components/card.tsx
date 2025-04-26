import Button from "./button"
import { RemoveFromCart, AddToCart } from "./icons"

interface CardProps {
  children: React.ReactNode
  styles: string
}

const Card = ({ children, styles }: CardProps) => {
  return <li className={styles}>{children}</li>
}

export default Card
