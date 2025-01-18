describe("Home", () => {
  it("renders Home", () => {
    cy.visit("http://localhost:3000")
    cy.get(".font-display")
  })
})
