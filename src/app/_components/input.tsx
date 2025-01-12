import { JSX } from "react"

interface InputProps {
  type: string
  changeEventHandler: React.ChangeEventHandler<HTMLInputElement>
  styles?: string
  value: string
  placeHolder: string
}

export default function Input({
  type,
  styles,
  changeEventHandler,
  placeHolder,
  value,
}: InputProps): JSX.Element {
  return (
    <input
      value={value}
      placeholder={placeHolder}
      type={type}
      onChange={changeEventHandler}
      className={styles}
    />
  )
}
