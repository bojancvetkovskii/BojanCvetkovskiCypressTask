describe("Registering new user tests", () => {

    it("Successful click on the Account button from homepage", () => {
        cy.visit("/")
        cy.get("#divSignIn").click()
        cy.url().should("include", "https://lv.sportsdirect.com/login")
    })


})