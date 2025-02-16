import { useState } from "react"
import FormComponent from "@/_components/form"
import Input from "@/_components/input"
import { registerPostFormAction } from "api/registerPostFormAction"

export default function FormRegister() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-white flex flex-col items-center justify-center p-10 rounded-md">
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
          styles={
            "w-full rounded-sm rounded-sm bg-white border-gray-500 border-2"
          }
          changeEventHandler={(e) => setEmail(e.target.value)}
          placeHolder={"Enter email"}
          value={email}
        />
        <label>Password</label>
        <Input
          required={true}
          type={"password"}
          name={"password"}
          styles={
            "w-full rounded-sm rounded-sm bg-white border-gray-500 border-2"
          }
          changeEventHandler={(e) => setPassword(e.target.value)}
          placeHolder={"Enter password"}
          value={password}
        />
        <button
          type="submit"
          className={
            "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm border-2 border-gray-950"
          }
        >
          Register
        </button>
      </FormComponent>
    </div>
  )
}
