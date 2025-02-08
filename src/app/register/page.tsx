"use client"
import { useState } from "react"
import FormComponent from "@/_components/form"
import Input from "@/_components/input"
import { registerPostFormAction } from "api/registerPostFormAction"

export default function Register(): any {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <FormComponent
      id="register-form"
      action={registerPostFormAction}
      styles="w-full flex flex-col justify-center items-center max-w-sm gap-4 text-black"
    >
      <label>Email</label>
      <Input
        required={true}
        type={"email"}
        name={"email"}
        styles={"w-1/2 rounded-sm"}
        changeEventHandler={(e) => setEmail(e.target.value)}
        placeHolder={"Enter email"}
        value={email}
      />
      <label>Password</label>
      <Input
        required={true}
        type={"password"}
        name={"password"}
        styles={"w-1/2 rounded-sm"}
        changeEventHandler={(e) => setPassword(e.target.value)}
        placeHolder={"Enter password"}
        value={password}
      />
      <button
        type="submit"
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm"
        }
      >
        Register
      </button>
    </FormComponent>
  )
}
