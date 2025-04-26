"use client"
import { IconContext } from "react-icons"

export default function UseIconContext({ children, styles }: any) {
  return <IconContext.Provider value={styles}>{children}</IconContext.Provider>
}
