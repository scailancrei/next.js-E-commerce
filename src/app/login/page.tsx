"use client"
import { JSX, useState } from "react"
import FormLogin from "login/formLogin"

const Login = (): JSX.Element => {
  return (
    <div className="grid gap-4 h-screen  ">
      <div className=" flex flex-col items-center justify-center h-screen  dark:bg-slate-700  ">
        <h2>Login</h2>
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
