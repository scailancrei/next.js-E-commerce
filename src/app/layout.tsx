import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "React 19 with TypeScript",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
