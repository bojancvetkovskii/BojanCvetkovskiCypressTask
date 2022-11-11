describe("Registering new user tests", () => {

    it("Successful click on the Account button from homepage", () => {
        cy.visit("/")
        cy.get("#divSignIn").click()
        cy.url().should("include", "https://lv.sportsdirect.com/login")
    })
    it("Successfully displayed the new customer section in log in page", () => {
        cy.visit("/login")
        cy.get(".newCustomer").get("div:first-of-type").get("h1").contains("New User?")

    })

})