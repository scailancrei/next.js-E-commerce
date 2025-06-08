"use client"
import { JSX } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import FormLogin from "login/formLogin"
import "../global.css"
import { ArrowBackIcon } from "@/_components/icons"
import UseIconContext from "@/context/useIconContext"

const Login = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md">
        <div className="mb-4 flex items-center justify-evenly w-full">
          <Link href="/" className="text-blue-500" aria-label="Home">
            <UseIconContext styles={{ size: "1.5rem" }}>
              <ArrowBackIcon />
            </UseIconContext>
          </Link>
          <h1 className="text-2xl font-bold">Login</h1>
        </div>

        <FormLogin />
      </div>
    </div>
  )
}

export default Login
