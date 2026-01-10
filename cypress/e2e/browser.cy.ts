describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("login with wrong credencials shows error message", () => {
    cy.prompt([
      "Visit home page based on http://localhost:3000",
      "Click on 'Login' button",
      "In the login form, enter '1234@gmail.com' as email and 'wrongpass' as password",
      "Click on 'Submit' button",
      "Verify that an error message 'email or password is incorrect",
    ])
  })
})
