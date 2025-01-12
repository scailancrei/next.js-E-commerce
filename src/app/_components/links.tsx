import { JSX } from "react"
import Link from "next/link"

type LinkProps = {
  children: string
  href: string
  styles?: string
}

export default function Links({
  styles,
  children,
  href,
}: LinkProps): JSX.Element {
  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  )
}
