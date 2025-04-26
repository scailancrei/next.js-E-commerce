"use server"
import { createClient } from "@/utils/supabase/server"

export async function GetUser() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    return { error }
  }

  return { data }
}
