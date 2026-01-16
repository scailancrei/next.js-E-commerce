"use server"

export async function consent(): Promise<{ consent: boolean }> {
  return { consent: true }
}
