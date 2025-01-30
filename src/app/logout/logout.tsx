import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export default async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
  }
  redirect("/")
}
