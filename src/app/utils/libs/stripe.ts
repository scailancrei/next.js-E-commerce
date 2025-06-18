import Stripe from "stripe"

export const stripe = new Stripe(process.env.NEXT_SECRET_STRIPE_KEY!)
