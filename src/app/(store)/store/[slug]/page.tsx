import type { Metadata } from "next"

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(slug)
  return <div>this is Product {slug}</div>
}
