"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ReturnPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace("/")
    }, 2000)
  })
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra! 🛒</h1>
      <p className="text-lg">Tu pago ha sido procesado correctamente.</p>
      {sessionId && (
        <p className="text-sm mt-2 text-gray-500">ID de sesión: {sessionId}</p>
      )}
      <p>Vas a volver a la pagina principal...</p>
    </div>
  )
}
