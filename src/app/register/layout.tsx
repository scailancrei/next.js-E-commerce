import Providers from "providers/providers"

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <section id="register-layout" className="dark:bg-slate-700 bg-white">
        {children}
      </section>
    </Providers>
  )
}
