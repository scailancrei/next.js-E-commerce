describe("Test the Api in differents calls", () => {
  it("get all the products", () => {
    cy.request(`https://fakestoreapi.com/products`).then((response) => {
      const products = response.body
      expect(products).to.be.an("array")
      expect(response.status).to.eq(200)
    })
  })
})
