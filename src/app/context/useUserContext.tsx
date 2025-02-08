"use client"
import { User } from "@supabase/supabase-js"
import { createContext } from "react"

interface UserContextType {
  currentUser: User | null
  setUser: (User: User) => void
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setUser: () => {},
})
