"use client"
import FormRegister from "./formRegister"
import "../global.css"
export default function RegisterPage(): any {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md">
        <h2>Register</h2>
        <FormRegister />
      </div>
    </div>
  )
}
