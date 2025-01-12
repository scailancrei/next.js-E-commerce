import React, { JSX } from "react"

type NavProps = {
  children: React.ReactNode
  styles?: string
  ulStyles?: string
}

export default function Nav({
  children,
  styles,
  ulStyles,
}: NavProps): JSX.Element {
  return (
    <nav className={styles}>
      <ul className={ulStyles}>{children}</ul>
    </nav>
  )
}
