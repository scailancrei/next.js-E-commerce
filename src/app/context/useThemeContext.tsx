import { createContext } from "react"
export type Theme = "light" | "dark"

interface ThemeContext {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => {},
})
