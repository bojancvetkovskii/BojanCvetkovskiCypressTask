const TITLE = "#Registration_Title";
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
const SIGN_IN_SECURELY_BUTTON = "#LogginButton";
const FORGOTTEN_YOUR_PASSWORD_LINK = "#ForgotPasswordLinkButton";
const EMAIL_FOR_EXISTING_USER_FIELD = "#Login_EmailAddress";
const PASSWORD_FOR_EXISTING_USER_FIELD = "#Login_Password";
const EMAIL_ADDRESS_FOR_FORGOT_YOUR_PASSWORD = "#EmailAddress";
const SEND_EMAIL_BUTTON = "#EmailRequestSubmit";
const CANCEL_CHANGING_PASSWORD_BUTTON = ".cancelWrap a";

export class LoginForm {

    static inputRegisteringData() {
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(TITLE).type(testData["title"], {force: true})
            cy.get(FIRST_NAME_FIELD).type(testData["firstName"], {force: true})
            cy.get(LAST_NAME_FIELD).type(testData["lastName"], {force: true})
            cy.get(EMAIL_ADDRESS_FIELD).type(testData["emailAddress"], {force: true})
            cy.get(DATE_OF_BIRTH_DAY).type(testData["dateOfBirthDay"], {force: true})
            cy.get(DATE_OF_BIRTH_MONTH).type(testData["dateOfBirthMonth"], {force: true})
            cy.get(DATE_OF_BIRTH_YEAR).type(testData["dateOfBirthYear"], {force: true})
            cy.get(PASSWORD_FIELD).type(testData["password"], {force: true})
            cy.get(CONFIRM_PASSWORD_FIELD).type(testData["confirmPassword"], {force: true})
        })

    }

    static inputRegisteringDataWithoutPasswords() {
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(TITLE).type(testData["title"], {force: true})
            cy.get(FIRST_NAME_FIELD).type(testData["firstName"], {force: true})
            cy.get(LAST_NAME_FIELD).type(testData["lastName"], {force: true})
            cy.get(EMAIL_ADDRESS_FIELD).type(testData["emailAddress"], {force: true})
            cy.get(DATE_OF_BIRTH_DAY).type(testData["dateOfBirthDay"], {force: true})
            cy.get(DATE_OF_BIRTH_MONTH).type(testData["dateOfBirthMonth"], {force: true})
            cy.get(DATE_OF_BIRTH_YEAR).type(testData["dateOfBirthYear"], {force: true})
        })
    }

    static inputDataForLoggingUser() {
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(EMAIL_FOR_EXISTING_USER_FIELD).type(testData["emailAddress"], {force: true})
            cy.get(PASSWORD_FOR_EXISTING_USER_FIELD).type(testData["password"], {force: true})
        })
    }

    static inputPassword(password, confirmPassword) {
        cy.get(PASSWORD_FIELD).type(password)
        cy.get(CONFIRM_PASSWORD_FIELD).type(confirmPassword)
    }

    static inputEmailAndIncorrectPassword() {
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(EMAIL_FOR_EXISTING_USER_FIELD).type(testData["emailAddress"], {force: true})
            cy.get(PASSWORD_FOR_EXISTING_USER_FIELD).type("DummyPassword123", {force: true})
        })
    }

    static inputEmailForForgottenPassword() {
        cy.fixture("userForRegistration").then((testData) => {
            cy.get(EMAIL_ADDRESS_FOR_FORGOT_YOUR_PASSWORD).type(testData["emailAddress"], {force: true})
        })
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

    static clickSignInSecurelyButton() {
        cy.get(SIGN_IN_SECURELY_BUTTON).click({force: true})
    }

    static clickForgottenYourPasswordLink() {
        cy.get(FORGOTTEN_YOUR_PASSWORD_LINK).click({force: true})
    }

    static clickSendEmailForChangingPassword() {
        cy.get(SEND_EMAIL_BUTTON).click({force: true})
    }

    static clickCancelForChangingPassword() {
        cy.get(CANCEL_CHANGING_PASSWORD_BUTTON).click({force: true})
    }

}
