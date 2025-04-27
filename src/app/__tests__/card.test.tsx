import Card from "@/_components/card"
import { render, screen } from "@testing-library/react"

describe("Card component", () => {
  it("Render the Card component with a children and without styles", () => {
    render(
      <Card>
        <div className="bg-blue-500 text-white p-3">Ecommerce-Store</div>
      </Card>
    )
    const cardElement = screen.getByRole("listitem")
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).toHaveTextContent("Ecommerce-Store")
  })

  it("Render the Card component with a children and styles", () => {
    render(
      <Card styles="bg-blue-500 text-white p-3">
        <div className="bg-blue-500 text-white p-3">Ecommerce-Store</div>
      </Card>
    )
    const cardElement = screen.getByRole("listitem")
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).toHaveTextContent("Ecommerce-Store")
    expect(cardElement).toHaveClass("bg-blue-500 text-white p-3")
  })

  it("Render the Card component without children and without styles", () => {
    render(<Card />)
    const cardElement = screen.getByRole("listitem")
    expect(cardElement).toBeInTheDocument()
    expect(cardElement).not.toHaveTextContent("Ecommerce-Store")
  })
})
