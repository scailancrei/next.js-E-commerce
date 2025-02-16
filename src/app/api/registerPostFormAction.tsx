"use server"
import { redirect } from "next/navigation"
import { createClient } from "utils/supabase/server"

export async function registerPostFormAction(formData: FormData) {
  const supabase = await createClient()

  let { data, error } = await supabase.auth.signUp({
    email: `${formData.get("email")}`,
    password: `${formData.get("password")}`,
  })

  if (error) {
    console.log(error)
  }

  console.log(data)

  return redirect("/login")
}
