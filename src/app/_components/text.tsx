import React from "react"
type TextProps = {
  children: string
  styles?: string
}
export default function Text({
  children,
  styles,
}: TextProps): React.ReactElement {
  return <p className={styles}>{children}</p>
}
