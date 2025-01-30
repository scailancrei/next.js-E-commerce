import Providers from "providers/providers"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <section
        id="login-layout"
        className="dark:bg-black dark:text-white bg-white text-black"
      >
        {children}
      </section>
    </Providers>
  )
}
