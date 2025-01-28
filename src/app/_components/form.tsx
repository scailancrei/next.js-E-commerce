import React, { JSX } from "react"
import Form from "next/form"
type FormProps = {
  children: React.ReactNode
  action: string | ((formData: FormData) => void | Promise<void>)
  id: string
  styles?: string
}

export default function FormComponent({
  children,
  action,
  id,
  styles,
}: FormProps): JSX.Element {
  return (
    <Form
      className={styles}
      action={
        typeof action === "string" ? action : (formData) => action(formData)
      }
      id={id}
      formMethod="post"
    >
      {children}
    </Form>
  )
}
