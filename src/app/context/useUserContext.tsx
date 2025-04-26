"use client"

import { createContext } from "react"
import { UserContextType } from "@/types/types"

export const UserContext = createContext<UserContextType>({
  currentUser: { user: undefined },
  setUser: () => {},
})
