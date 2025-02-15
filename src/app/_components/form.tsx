import React, { JSX } from "react"
import Form from "next/form"
type FormProps = {
  children: React.ReactNode
  action: string | ((formData: FormData) => Promise<void>)
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
    <Form className={styles} action={action} id={id} formMethod="post">
      {children}
    </Form>
  )
}
