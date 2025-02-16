export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" grid grid-cols-1 h-screen  bg-gradient-to-b from-amber-900 to-slate-700">
      <section id="register-layout">{children}</section>
    </div>
  )
}
