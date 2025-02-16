export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 h-screen  bg-gradient-to-b from-slate-700 to-blue-400">
      <section id="login-layout">{children}</section>
    </div>
  )
}
