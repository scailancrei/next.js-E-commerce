import { JSX, useState } from "react"
import FormComponent from "@/_components/form"
import Input from "@/_components/input"
import { loginPostForm } from "api/loginPostForm"
import Link from "next/link"

export default function FormLogin(): any {
  const [email, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <FormComponent
      id="login-form"
      action={loginPostForm}
      styles="w-full flex flex-col justify-center items-center max-w-sm gap-4 text-black"
    >
      <label>Username</label>
      <Input
        required={true}
        type={"email"}
        name={"email"}
        styles={"w-1/2 rounded"}
        changeEventHandler={(e) => setUsername(e.target.value)}
        placeHolder={"Enter email"}
        value={email}
      />
      <label>Password</label>
      <Input
        type={"password"}
        name={"password"}
        required={true}
        styles={"w-1/2"}
        changeEventHandler={(e) => setPassword(e.target.value)}
        placeHolder={"Enter Password"}
        value={password}
      />
      <button
        type="submit"
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
      >
        Login
      </button>

      <Link
        href={"/register"}
        replace
        className="text-blue-500 hover:text-blue-700"
      >
        Don't have an account yet?
      </Link>
    </FormComponent>
  )
}
