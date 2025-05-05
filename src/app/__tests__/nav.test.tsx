import Nav from "@/_components/nav"
import { screen, render } from "@testing-library/react"

describe("Nav component", () => {
  it("Render the Nav component with a children", () => {
    render(
      <Nav id="navbar">
        <ul className="bg-blue-500 text-white p-3">
          <li>Ecommerce-Store</li>
        </ul>
      </Nav>
    )
    const navElement = screen.getByRole("navigation")
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveAttribute("id", "navbar")
    expect(screen.getByText("Ecommerce-Store")).toBeInTheDocument()
  })

  it("Render the Nav component without children", () => {
    render(<Nav id="navbar" />)
    const navElement = screen.getByRole("navigation")
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveAttribute("id", "navbar")
    expect(screen.queryByText("Ecommerce-Store")).not.toBeInTheDocument()
  })

  it("Render the Nav component with ulStyles", () => {
    const ulStyles = "bg-blue-500 text-white p-3"
    render(
      <Nav id="navbar" ulStyles="bg-blue-500 text-white p-3">
        <ul className={ulStyles}>
          <li>Ecommerce-Store</li>
        </ul>
      </Nav>
    )
    const navElement = screen.getByRole("navigation")
    expect(navElement).toBeInTheDocument()
    expect(navElement).toHaveAttribute("id", "navbar")
    expect(screen.getByText("Ecommerce-Store")).toBeInTheDocument()
  })
})
