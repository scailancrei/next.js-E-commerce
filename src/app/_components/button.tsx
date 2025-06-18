import React, { JSX } from "react"
import { ButtonProps } from "@/types/types"

export default function Button({
  styles,
  title,
  typeButton,
  handleClick,
  idButton,
  children,
}: ButtonProps): React.ReactElement {
  return (
    <button
      title={title}
      id={idButton}
      onClick={handleClick}
      type={typeButton}
      className={styles}
    >
      {children}
    </button>
  )
}
