"use client"
import React, { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import CheckoutForm from "@/_components/checkOutForm"

/**
 * CheckoutPage component that renders the checkout form.
 * It checks if there are products in the cart, and if not, redirects to the main page.
 * If there are products, it displays the checkout form using Stripe Elements.
 * @function CheckoutPage
 * @returns {React.ReactElement} - The rendered CheckoutPage component.
 * @returns CheckoutPage component that renders the checkout form.
 */

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
    <div className="flex justify-center items-center h-full">
      <CheckoutForm />
    </div>
  )
}
