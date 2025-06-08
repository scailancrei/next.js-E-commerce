import { IconType } from "react-icons"
import { TfiMenuAlt } from "react-icons/tfi"
import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { IoArrowBackCircle } from "react-icons/io5"
import { LuShoppingCart } from "react-icons/lu"
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs"

export const MenuIcon: IconType = () => {
  return <TfiMenuAlt />
}

export const ShoppingCartIcon: IconType = () => {
  return <LuShoppingCart />
}

export const SearchIcon: IconType = () => {
  return <FaSearch />
}

export const ArrowBackIcon: IconType = () => {
  return <IoArrowBackCircle />
}

export const CloseIcon: IconType = () => {
  return <FaXmark />
}

export const AddToCart: IconType = () => {
  return <BsCartPlusFill />
}

export const RemoveFromCart: IconType = () => {
  return <BsCartDashFill />
}
