"use client"
import { JSX, useState } from "react"
import FormLogin from "login/formLogin"
import "../global.css"

const Login = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md">
        <h2>Login</h2>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
