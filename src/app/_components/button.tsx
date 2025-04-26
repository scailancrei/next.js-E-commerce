import React, { JSX } from "react"
type ButtonProps = {
  children?: JSX.Element | React.ReactNode
  typeButton: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  styles?: string
  idButton?: string
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}
export default function Button({
  styles,
  typeButton,
  handleClick,
  idButton,
  children,
}: ButtonProps): React.ReactElement {
  return (
    <button
      id={idButton}
      onClick={handleClick}
      type={typeButton}
      className={styles}
    >
      {children}
    </button>
  )
}
