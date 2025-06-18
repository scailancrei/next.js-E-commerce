export async function fetchClientSecret(productsCart: any[]): Promise<string> {
  const res = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: productsCart,
    }),
  })
  const data = await res.json()

  if (!data.clientSecret) {
    throw new Error("Client secret missing")
  }

  return data.clientSecret
}
