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
    it("Successfully redirected to the Sign up form from log in page", () => {
        cy.visit("/login")
        cy.get(".NewCustWrap:last-of-type").click()
        cy.url().should("include", "https://lv.sportsdirect.com/registration")
    })


})