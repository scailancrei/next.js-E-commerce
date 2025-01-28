import { JSX } from "react"

interface InputProps {
  type: string
  required?: boolean
  changeEventHandler: React.ChangeEventHandler<HTMLInputElement>
  styles?: string
  value: string
  name: string
  placeHolder: string
}

export default function Input({
  type,
  name,
  required,
  styles,
  changeEventHandler,

  placeHolder,
  value,
}: InputProps): JSX.Element {
  return (
    <input
      required={required}
      value={value}
      name={name}
      placeholder={placeHolder}
      type={type}
      onChange={changeEventHandler}
      className={styles}
    />
  )
}
