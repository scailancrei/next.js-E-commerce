import { render, screen } from "@testing-library/react"
import FormComponent from "@/_components/form"

describe("Form component", () => {
  it("Render fails if the Form component has not children", () => {
    render(<FormComponent></FormComponent>)
    const formElement = screen.getByRole("generic")
    expect(formElement).not.toBeEmptyDOMElement()
  })

  it("Render Form component with action and id", () => {
    render(
      <FormComponent action="https://fakestoreapi.com/login" id="login-form">
        <input
          type="email"
          aria-label="email"
          name="email"
          placeholder="Email"
        />

        <input
          type="password"
          aria-label="password"
          name="password"
          placeholder="Password"
        />
      </FormComponent>
    )
    const formElement = screen.getByRole("form")
    expect(formElement).toBeInTheDocument()
    const inputEmail = screen.getByLabelText("email")
    expect(inputEmail).toBeInTheDocument()
    expect(inputEmail).toHaveAttribute("name", "email")

    const inputPassword = screen.getByLabelText("password")
    expect(inputPassword).toBeInTheDocument()
    expect(inputPassword).toHaveAttribute("name", "password")

    expect(formElement).toHaveAttribute(
      "action",
      "https://fakestoreapi.com/login"
    )
    expect(formElement).toHaveAttribute("id", "login-form")
  })
})
