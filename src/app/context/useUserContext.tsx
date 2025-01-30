"use client"
import { User } from "@supabase/supabase-js"
import { createContext } from "react"

export type UserObject = {
  User: User
}

interface UserContext {
  user: UserObject | null
  setUser: (user: UserObject) => void
}

export const UserContext = createContext<UserContext>({} as UserContext)
