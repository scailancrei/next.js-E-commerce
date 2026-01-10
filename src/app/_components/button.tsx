import React, { JSX } from "react"
import { ButtonProps } from "@/types/types"

export default function Button({
  styles,
  title,
  typeButton,
  handleClick,
  idButton,
  dataCy,
  children,
}: ButtonProps): React.ReactElement {
  return (
    <button
      title={title}
      id={idButton}
      onClick={handleClick}
      type={typeButton}
      data-cy={dataCy}
      className={styles}
    >
      {children}
    </button>
  )
}
