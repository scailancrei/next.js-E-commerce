"use client"
import { ProductsCartContext } from "@/context/useProductsCartContext"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { fetchClientSecret } from "app/services/actions/stripeAction"
import { useContext, useState } from "react"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

export default function CheckoutForm() {
  const { productsCart } = useContext(ProductsCartContext)
  const [clientSecret, setClientSecret] = useState<string | null>(null)

  const loadSecret = async () => {
    const secret = await fetchClientSecret(productsCart)
    setClientSecret(secret)
  }

  if (!clientSecret) return <p>Loading payments...</p>
  if (!stripePromise) return <p>Loading Stripe...</p>

  return (
    <div id="checkout" className="bg-linear-30">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ clientSecret }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
