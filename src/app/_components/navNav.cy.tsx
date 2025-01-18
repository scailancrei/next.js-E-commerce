import React from "react"
import Nav from "./nav"

describe("<Nav />", () => {
  it("renders", () => {
    const children = <div>Hello</div>
    cy.mount(<Nav>{children}</Nav>)
  })
})
