"use client"
import { useState } from "react"
import { ThemeContext, Theme } from "@/context/useThemeContext"
import { User } from "@supabase/supabase-js"
import { UserContext } from "@/context/useUserContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [user, setUser] = useState<User>(null)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleUser = (userToken: User) => {
    console.log("Toggle user here: ", userToken)
    setUser(userToken)
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={{ currentUser: user, setUser: toggleUser }}>
        {children}
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}
