export default function CheckOutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid  bg-gradient-to-b from-slate-700 to-blue-400">
      <section id="checkout-layout">{children}</section>
    </div>
  )
}
