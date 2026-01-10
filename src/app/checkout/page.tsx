"use client"
import React, { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import CheckoutForm from "@/_components/checkOutForm"

export default function CheckoutPage(): React.ReactElement {
  const { productsCart } = useContext(ProductsCartContext)

  const router = useRouter()

  useEffect(() => {
    if (productsCart.length === 0) {
      router.replace("/")
    }
  }, [productsCart, router])

  if (productsCart.length === 0) {
    return <div>Redirecting to main page...</div>
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <CheckoutForm />
    </div>
  )
}
