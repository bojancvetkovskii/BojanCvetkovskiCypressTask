import {LoginForm} from "../../page-objects/login-form";

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

    it("Successfully displayed the form for registering new user", () => {
        cy.visit("/registration")
        expect("#RegistrationForm").to.exist
    })

    it("Should display errors when there are no data for the user", () => {
        cy.visit("/registration")
        LoginForm.clickRegisterButton()

        expect("#Registration_FirstName-error").to.exist;
        expect("#Registration_LastName-error").to.exist;
        expect("#Registration_EmailAddress-error").to.exist;
        expect("#Registration_txtPassword-error").to.exist;
        expect("#Registration_ConfirmPassword-error").to.exist;

        cy.url().should("include", "https://lv.sportsdirect.com/registration")
    })

    it("Should return to home page when 'Cancel' button is pressed", () => {
        cy.visit("/registration")
        LoginForm.clickCancelButton()
        cy.url().should("include", "https://lv.sportsdirect.com")
    })

    it("Successfully registering new user", () => {
        cy.visit("/registration")
        LoginForm.inputRegisteringData()
        LoginForm.clickRegisterButton()
    })

    it("Should not register user when password and confirmation password are different", () => {
        cy.visit("/registration")
        LoginForm.inputRegisteringDataWithoutPasswords()
        LoginForm.inputPassword("Test12345", "Test666666")
        LoginForm.clickRegisterButton()

        expect("#Registration_txtPassword-error").to.exist;
        expect("#Registration_ConfirmPassword-error").to.exist;

        cy.url().should("include", "https://lv.sportsdirect.com/registration")
    })
})