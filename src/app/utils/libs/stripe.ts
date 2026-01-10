import Stripe from "stripe"

export const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_KEY!, {
  apiVersion: "2025-12-15.clover",
})
