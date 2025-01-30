"use client"
import { useState } from "react"
import { ThemeContext, Theme } from "@/context/useThemeContext"
import { UserContext, UserObject } from "@/context/useUserContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [user, setUser] = useState<UserObject>(null)
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleUser = (user: UserObject) => {
    setUser(user)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ user: null, setUser: toggleUser }}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}
