import { JSX, useContext } from "react"
import { UserContext } from "@/context/useUserContext"

export default function Profile(): JSX.Element {
  const userContext = useContext(UserContext)
  console.log(userContext.user)
  return <div>Profile </div>
}
