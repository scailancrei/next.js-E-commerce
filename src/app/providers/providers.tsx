"use client"
import { useState } from "react"
import { ThemeContext, Theme } from "@/context/useThemeContext"
import { UserContext, UserType } from "@/context/useUserContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [currentUser, setCurrentUser] = useState<UserType | null>()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const saveUser = (user) => {
    setCurrentUser(user)
  }

  return (
    <UserContext.Provider
      value={{ currentUser: currentUser, setUser: saveUser }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
}
