import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
  }
  redirect("/")
}
