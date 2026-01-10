describe("Products management", () => {
  it("add product two products to cart and close it", function () {
    cy.visit("http://localhost:3000")
    cy.get("li:nth-child(1) button.font-bold").click()
    cy.get("li:nth-child(2) button.font-bold").click()
    cy.get("[data-cy='cart-button']").click()
    cy.wait(1000)
    cy.get("[data-cy='close-cart-button']").click()
  })
})
