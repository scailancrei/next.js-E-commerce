import type { Metadata } from "next"
import { NavItem } from "@/_components/navItem"
import Links from "@/_components/links"

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(slug)
  return (
    <div>
      <NavItem styles={"col-1 text-sm"}>
        <Links href={"/"} styles={"text-white"}>
          E-Commerce Store
        </Links>
      </NavItem>
      this is Product {slug}
    </div>
  )
}
