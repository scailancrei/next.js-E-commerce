import React, { JSX, useCallback } from "react"
import { ButtonProps } from "@/types/types"

export default React.memo(function Button({
  styles,
  title,
  typeButton,
  handleClick,
  idButton,
  dataCy,
  children,
  arialLabel,
}: ButtonProps & { arialLabel?: string }): React.ReactElement {
  const onClickHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      handleClick?.(event)
    },
    [handleClick]
  )

  const onKeyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault()
        handleClick?.(event as any)
      }
    },
    [handleClick]
  )

  return (
    <button
      title={title}
      id={idButton}
      onClick={onClickHandler}
      onKeyDown={onKeyDownHandler}
      type={typeButton}
      data-cy={dataCy}
      className={` ${styles} focus-visible:ring-2 focus-visible:ring-blue-500 `}
      aria-label={arialLabel}
    >
      {children}
    </button>
  )
})
