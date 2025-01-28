"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function Profile() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data) {
    redirect("/login")
  }
  return <h2>Welcome {data.user.email || ""}</h2>
}
