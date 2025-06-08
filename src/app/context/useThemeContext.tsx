import { createContext } from "react"
import { Theme } from "@/types/types"

interface ThemeContext {
  theme: Theme
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  toggleTheme: () => {},
})
