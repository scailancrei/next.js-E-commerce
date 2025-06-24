import React from "react"

export default function RetunLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid bg-gradient-to-b from-blue-500 to-slate-600">
      {children}
    </div>
  )
}
