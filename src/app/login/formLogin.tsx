import { JSX, useState } from "react"
import FormComponent from "@/_components/form"
import Input from "@/_components/input"
import { loginPostFormAction } from "app/services/loginPostFormAction"
import Link from "next/link"

export default function FormLogin(): JSX.Element {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  return (
    <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md">
      <FormComponent
        id="login-form"
        action={async (formData) => {
          try {
            await loginPostFormAction(formData)
          } catch (error) {
            if (error instanceof Error) {
              setError(error.message)
              setTimeout(() => {
                setError("")
              }, 3000)
            }
          }
        }}
        styles="w-full flex flex-col justify-center items-center max-w-sm gap-4 text-black"
      >
        <label className="focus:valid:bg-green-600 focus:invalid:bg-red-600 ">
          Email
        </label>
        <Input
          required={true}
          type={"email"}
          name={"email"}
          styles={"w-full rounded-sm bg-white border-gray-500 border-2"}
          changeEventHandler={(e) => setEmail(e.target.value)}
          placeHolder={"Enter email"}
          value={email}
        />

        <label className="focus:has-valid:bg-green-600 focus:has-invalid:bg-red-600">
          Password
        </label>
        <Input
          type={"password"}
          name={"password"}
          required={true}
          styles={"w-full rounded-sm bg-white border-gray-500 border-2"}
          changeEventHandler={(e) => setPassword(e.target.value)}
          placeHolder={"Enter Password"}
          value={password}
        />
        <button
          type="submit"
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-2 border-gray-950"
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

      <div className="text-center bg-red-300 text-red-700">{error}</div>
    </div>
  )
}
