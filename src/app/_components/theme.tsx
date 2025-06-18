"use client"
import { useContext, JSX } from "react"
import { ThemeContext } from "@/context/useThemeContext"
import Button from "./button"

export default function Theme(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Button
        title="Toggle theme"
        styles=" hover:p-0.5 hover:rounded-full hover:bg-gray-200/50 hover:shadow-md transition-all duration-300 ease-in-out"
        typeButton="button"
        handleClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "🌞"}
      </Button>
    </>
  )
}
