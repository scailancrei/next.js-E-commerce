import React, { JSX } from "react"
type TextProps = {
  children: string
  styles?: string
}
export default function Text({ children, styles }: TextProps): JSX.Element {
  return <p className={styles}>{children}</p>
}
