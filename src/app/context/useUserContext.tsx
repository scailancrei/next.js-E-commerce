"use client"
import { User } from "@supabase/supabase-js"
import { createContext } from "react"

export type UserType = {
  User: User
}
interface UserContextType {
  currentUser: UserType | null
  setUser: (User: User) => void
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setUser: () => {},
})
