import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/utils/libs/stripe"

export async function POST(req: NextRequest) {
  const origin = req.headers.get("origin") || "http://localhost:3000"
  const { products } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      customer_email: "customer@example.com",
      submit_type: "pay",
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },
      line_items: products.map((product: any) => ({
        price_data: {
          currency: "eur",
          product_data: { name: product.title },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      })),

      mode: "payment",
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    })

    return NextResponse.json({ clientSecret: session.client_secret })
  } catch (error) {
    console.error("Stripe error:", error)
    return NextResponse.json({ error: "Stripe error" }, { status: 500 })
  }
}
