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
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(FIRST_NAME_FIELD).type(testData["firstName"], {force: true})
            cy.get(LAST_NAME_FIELD).type(testData["lastName"], {force: true})
            cy.get(EMAIL_ADDRESS_FIELD).type(testData["emailAddress"], {force: true})
            cy.get(PASSWORD_FIELD).type(testData["password"], {force: true})
            cy.get(CONFIRM_PASSWORD_FIELD).type(testData["confirmPassword"], {force: true})
        })

    }

    static inputPassword(password, confirmPassword) {
        cy.get(PASSWORD_FIELD).type(password)
        cy.get(CONFIRM_PASSWORD_FIELD).type(confirmPassword)
    }

    static clickSubscriptionCheckbox() {
        cy.get(IS_SUBSCRIBER_CHECKBOX).type("true")

    }

    static clickRegisterButton() {
        cy.get(REGISTER_BUTTON).click({force: true})

    }

    static clickCancelButton() {
        cy.get(CANCEL_BUTTON).click({force: true})

    }
}
