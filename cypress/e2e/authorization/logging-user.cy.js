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

    it("User should not login with wrong password", () => {
        cy.visit("/registration")
        LoginForm.inputRegisteringData()
        LoginForm.clickRegisterButton()

        cy.visit("/login")
        LoginForm.inputEmailAndIncorrectPassword()
        LoginForm.clickSignInSecurelyButton()
        cy.get(".dnnFormMessage.dnnFormValidationSummary.field-validation-error")
            .contains("This email address or password is incorrect")
        cy.url().should("include", "https://lv.sportsdirect.com/login")
    })

    it("User should be redirected to 'Forgot your password' form", () => {
        cy.visit("/login")
        LoginForm.clickForgottenYourPasswordLink()
        cy.url().should("include", "https://lv.sportsdirect.com/login/forgottenpassword")
    })

    it("Should contain new password section", () => {
        cy.visit("/login/forgottenpassword")
        expect("section#main-content").to.exist;
    })

    it("Successfully sent email for changing password", () => {
        cy.visit("/login/forgottenpassword")
        LoginForm.inputEmailForForgottenPassword()
        LoginForm.clickSendEmailForChangingPassword()
        cy.url().should("include", "https://lv.sportsdirect.com/login/forgottenpassword")
        cy.get(".dnnFormMessage.dnnFormSuccess")
            .contains("If the email address entered was correct, you should receive a new email shortly with a link to reset your password.")
    })

    it("Should not send email for changing password when the e-mail address field is empty", () => {
        cy.visit("/login/forgottenpassword")
        LoginForm.clickSendEmailForChangingPassword()
        cy.get("#EmailAddress-error").contains("Email address is required")
    })

    it("Should redirect to login page when cancel button is clicked in 'Forgotten password' section", () => {
        cy.visit("/login/forgottenpassword")
        LoginForm.clickCancelForChangingPassword()
        cy.url().should("equal", "https://lv.sportsdirect.com/login")
    })
})