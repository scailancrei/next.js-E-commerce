import { IconType } from "react-icons"
import { TfiMenuAlt } from "react-icons/tfi"
import { FaSearch } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"
import { BsCartPlusFill, BsCartDashFill } from "react-icons/bs"

export const MenuIcon: IconType = () => {
  return <TfiMenuAlt />
}

export const SearchIcon: IconType = () => {
  return <FaSearch />
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
