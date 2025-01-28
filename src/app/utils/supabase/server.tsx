import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
export async function createClient() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.map(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch (error) {
            console.log(error)
          }
        },
      },
    }
  )

  return supabase
}
