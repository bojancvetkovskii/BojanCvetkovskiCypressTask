import { BasePage } from "./base-page";

const ALLOW_COOKIE_BUTTON = "#onetrust-accept-btn-handler"
const EMAIL_FIELD = "#Login_EmailAddress"
const PASSWORD_FIELD = "#Login_Password"
const LOGIN_BUTTON = ".NewCustWrap #LoginButton"
const ERROR_MESSAGE = ".field-validation-error"
const CONTINUE_SECURELY_BUTTON = ".newCustomer .ImgButWrap"
const FORGOTTEN_PASSWORD_LINK = ".ForgotPasswordLinkButton";
const LOGIN_CONTAINER=".loginWrap"

export class LoginForm extends BasePage{

    static clickContinueSecurelyButton() {
        this.click(CONTINUE_SECURELY_BUTTON);
    }

    static acceptCookies(){
        // This is added since I had issue with the overlay for accepting cookies
        // Cypress Error: I had the following error cy.click() failed because
        // element is being covered by another element. Fix this problem or use
        // {force: true} to disable error checking.
        this.click(ALLOW_COOKIE_BUTTON);
    }

    static inputLoginDataAndLogin(email, password) {
        this.type(EMAIL_FIELD, email);
        this.acceptCookies();
        this.type(PASSWORD_FIELD, password);
        this.click(LOGIN_BUTTON);
    }

    static verifyErrorMessage(error) {
        this.hasText(ERROR_MESSAGE, error);
    }

    static clickLoginButton() {
        this.click(LOGIN_BUTTON);
    }

    static inputPassword(password) {
        this.type(PASSWORD_FIELD, password);
    }

    static inputEmail(email) {
        this.type(EMAIL_FIELD, email);
    }

    static clickOnForgottenPasswordLink() {
        this.click(FORGOTTEN_PASSWORD_LINK);
    }

    static isPageContainerVisible() {
        this.isVisible(LOGIN_CONTAINER)
    }
}
