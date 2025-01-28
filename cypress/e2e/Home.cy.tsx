describe("Home", () => {
  it("renders Home", () => {
    cy.contains("E-Commerce Store")
  })
  it("renders the navbar", () => {
    cy.get("#navbar").should("exist")
  })

  it("renders products title", () => {
    cy.get("#title").should("exist").and("contain", "Products")
  })

  it("render products without title", () => {
    cy.get("#title").should("not.be.empty")
  })

  it("render products list", () => {
    cy.get(".list-disc > .grid").should("exist")
  })
})
