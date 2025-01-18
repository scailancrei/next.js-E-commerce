import Home from "page"
describe("Home", () => {
  it("renders Home", () => {
    cy.mount(<Home />)
  })
})
