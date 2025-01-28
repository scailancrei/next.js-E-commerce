"use client"
import { useContext, JSX } from "react"
import { ThemeContext } from "@/context/useThemeContext"
import Button from "./button"

type ThemeProps = {
  children?: React.ReactNode
  styles?: string
}

export default function Theme({ children, styles }: ThemeProps): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Button typeButton="button" handleClick={toggleTheme}>
        {theme === "light" ? "🌙" : "🌞"}
      </Button>
      {children}
    </>
  )
}
