"use client"
import { JSX, useState } from "react"
import FormLogin from "login/formLogin"
import "../global.css"
import Theme from "@/_components/theme"

const Login = (): JSX.Element => {
  return (
    <div className="grid grid-rows-[100px_1fr] gap-4 h-screen bg-white dark:bg-slate-700 ">
      <div className="flex flex-col items-end justify-center gap-4 ">
        <Theme />
      </div>
      <div className="flex flex-col  items-center justify-center ">
        <h2>Login</h2>

        <FormLogin />
      </div>
    </div>
  )
}

export default Login
