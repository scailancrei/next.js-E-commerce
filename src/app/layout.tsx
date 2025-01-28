import { Metadata, Viewport } from "next"
import "./globals.css"
import Providers from "providers/providers"

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "React 19 with TypeScript",
}

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
