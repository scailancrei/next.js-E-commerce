"use server"
import { redirect } from "next/navigation"
import { createClient } from "utils/supabase/server"
import { z } from "zod"

const Schema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Email is invalid",
  }),
  password: z.string(),
})

export async function loginPostForm(formData: FormData): Promise<void> {
  const supabase = await createClient()
  const validateForm = Schema.safeParse({
    email: formData.get("email") as string,
    password: formData.get("password") as string | undefined,
  })
  if (!validateForm.success) {
  }
  const rawData = {
    email: validateForm.data.email,
    password: validateForm.data.password,
  }

  const { error } = await supabase.auth.signInWithPassword(rawData)

  if (error) {
    console.log(error.code)
  }

  return redirect("/")
}
