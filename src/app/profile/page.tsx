import { JSX, useContext } from "react"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function Profile() {
  const supabase = await createClient()
  const userResponse = await supabase.auth.getUser()
  if (userResponse.error) {
    redirect("/login")
  }
  return <div>Profile </div>
}
