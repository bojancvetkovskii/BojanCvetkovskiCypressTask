import {LoginForm} from "../../page-objects/login-form";


describe("Logging in user", () => {

    it("Successful logging in", () => {
        cy.visit("/")
        cy.get("#divSignIn").click()
        cy.url().should("include", "https://lv.sportsdirect.com/login")
    })

    it("Successfully displayed the already registered customer section in the logging page", () => {
        cy.visit("/login")
        cy.get(".existingCustomer").get("div:first-of-type").get("h1").contains("Already Registered")

    })

    it("Successfully logged in user", () => {
        cy.visit("/registration")
        LoginForm.inputRegisteringData()
        LoginForm.clickRegisterButton()

        cy.visit("/login")
        LoginForm.inputDataForLoggingUser()
        LoginForm.clickSignInSecurelyButton()
        cy.url().should("include", "https://lv.sportsdirect.com")
    })
})