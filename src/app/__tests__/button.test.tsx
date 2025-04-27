import "@testing-library/jest-dom"
import Button from "@/_components/button"
import { render, screen } from "@testing-library/react"

describe("Button", () => {
  it("should render the button component", () => {
    render(<Button typeButton="button">Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
  })

  it("should render the button component with typeButton attribute button", () => {
    render(<Button typeButton="submit">Button</Button>)
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute("type", "button")
  })

  it("should render the button component with handleClick", () => {
    const handleClick = jest.fn()
    render(
      <Button typeButton="button" handleClick={handleClick}>
        Button
      </Button>
    )
    const button = screen.getByRole("button")
    expect(button).toBeInTheDocument()
    button.click()
    expect(handleClick).toHaveBeenCalled()
  })
})
