const REGISTRATION_TITLE = "#Registration_Title";
const FIRST_NAME_FIELD = "#Registration_FirstName";
const LAST_NAME_FIELD = "#Registration_LastName";
const EMAIL_ADDRESS_FIELD = "#Registration_EmailAddress";
const DATE_OF_BIRTH_DAY = "#Registration_DateOfBirthDay";
const DATE_OF_BIRTH_MONTH = "#Registration_DateOfBirthMonth";
const DATE_OF_BIRTH_YEAR = "#Registration_DateOfBirthYear";
const PASSWORD_FIELD = "#txtPassword";
const CONFIRM_PASSWORD_FIELD = "#Registration_ConfirmPassword";
const IS_SUBSCRIBER_CHECKBOX = "#Registration_isSubscriber";
const REGISTER_BUTTON = "#RegistrationSubmit";
const CANCEL_BUTTON = ".cancelBut";

export class RegisterForm {
    static inputRegisteringData() {
        cy.get(REGISTRATION_TITLE).type("Mr")
        cy.get(FIRST_NAME_FIELD).type("John")
        cy.get(LAST_NAME_FIELD).type("Wick")
        cy.get(EMAIL_ADDRESS_FIELD).type("john.wick@gmail.com")
        cy.get(DATE_OF_BIRTH_DAY).type("25")
        cy.get(DATE_OF_BIRTH_MONTH).type("November")
        cy.get(DATE_OF_BIRTH_YEAR).type("1976")

    }

    static inputPassword(password, confirmPassword) {
        cy.get(PASSWORD_FIELD).type(password)
        cy.get(CONFIRM_PASSWORD_FIELD).type(confirmPassword)
    }

    static clickSubscriptionCheckbox() {
        cy.get(IS_SUBSCRIBER_CHECKBOX).type("true")

    }

    static clickRegisterButton() {
        cy.get(REGISTER_BUTTON).click()

    }

    static clickCancelButton() {
        cy.get(CANCEL_BUTTON).click()

    }
}
