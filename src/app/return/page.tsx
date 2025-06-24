"use client"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ReturnPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const router = useRouter()

  return (
    <div className="h-full flex flex-1/2 bg-blue-700">
      <div className="bg-amber-900">
        <h2>hellooo</h2>
      </div>
      <h1>Bienvenidooooo!!!!</h1>
      <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra! 🛒</h1>
      <p className="text-lg">Tu pago ha sido procesado correctamente.</p>
      {sessionId && (
        <p className="text-sm mt-2 text-gray-500">
          ID de sesión: {sessionId || null}
        </p>
      )}
      <p>Vas a volver a la pagina principal...</p>
    </div>
  )
}
