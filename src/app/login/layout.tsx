import Providers from "providers/providers"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <section id="login-layout">{children}</section>
    </Providers>
  )
}
