import React, { JSX } from "react"

type NavProps = {
  children: React.ReactNode
  styles?: string
  id?: string
  ulStyles?: string
}

export default function Nav({
  children,
  styles,
  id,
  ulStyles,
}: NavProps): JSX.Element {
  return (
    <nav id={id} className={styles}>
      <ul className={ulStyles}>{children}</ul>
    </nav>
  )
}
