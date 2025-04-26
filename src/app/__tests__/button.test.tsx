import "@testing-library/jest-dom"
import Button from "@/_components/button"
import { render, screen } from "@testing-library/react"

describe("Button", () => {
  it("should render the button", () => {
    const { queryByText } = render(<Button>Button</Button>)

    expect(queryByText("Button")).toBeInTheDocument()
  })
})
