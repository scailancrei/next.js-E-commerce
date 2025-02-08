"use client"
import { createContext } from "react"
export type Theme = "light" | "dark"

type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext | null>(null)
