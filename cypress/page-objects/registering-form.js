import { BasePage } from "./base-page";

const REGISTRATION_FORM_CONTAINER = "#RegistrationForm";
const REGISTRATION_TITLE = "#Registration_Title";
const FIRST_NAME = "#Registration_FirstName";
const LAST_NAME = "#Registration_LastName";
const EMAIL_ADDRESS = "#Registration_EmailAddress";
const DATE_DAY = "#Registration_DateOfBirthDay";
const DATE_MONTH = "#Registration_DateOfBirthMonth";
const DATE_YEAR = "#Registration_DateOfBirthYear";
const PASSWORD = "#txtPassword";
const CONFIRMATION_PASSWORD = "#Registration_ConfirmPassword";
const SUBSCRIBE_CHECKBOX = "#Registration_IsSubscriber";
const REGISTER_BUTTON = "#RegistrationSubmit";
const CANCEL_BUTTON = "div.cancelBut > a";

const FIRST_NAME_ERROR = "#Registration_FirstName-error";
const LAST_NAME_ERROR = "#Registration_LastName-error";
const EMAIL_ADDRESS_ERROR = "#Registration_EmailAddress-error";
const CONFIRMATION_PASSWORD_ERROR = "#Registration_ConfirmPassword-error";

export class RegisteringForm extends BasePage {

  static checkIfContainerVisible() {
    this.isVisible(REGISTRATION_FORM_CONTAINER);
  }

  static clickRegister() {
    this.click(REGISTER_BUTTON);
  }

  static inputData() {

    this.acceptCookies();

    cy.fixture("userForRegistration").then((testData) => {

      const email = "testMail" + Math.floor((Math.random() * 10000) + 1) + "@gmail.com";

      this.type(FIRST_NAME, testData["firstName"]);
      this.type(LAST_NAME, testData["lastName"]);
      this.type(EMAIL_ADDRESS, email);
      this.type(PASSWORD, testData["password"]);
      this.type(CONFIRMATION_PASSWORD, testData["confirmPassword"]);
      this.selectItem(REGISTRATION_TITLE, testData["title"]);
      this.selectItem(DATE_DAY, testData["dateOfBirthDay"]);
      this.selectItem(DATE_MONTH, testData["dateOfBirthMonth"]);
      this.selectItem(DATE_YEAR, testData["dateOfBirthYear"]);
    });

    cy.get(SUBSCRIBE_CHECKBOX).check()
    this.clickRegister();
  }

  static validateErrorsForSubmittedEmptyForm() {
    this.acceptCookies();
    this.isVisible(FIRST_NAME_ERROR)
    this.isVisible(LAST_NAME_ERROR)
    this.isVisible(EMAIL_ADDRESS_ERROR)
    this.isVisible(CONFIRMATION_PASSWORD_ERROR)
  }

  static clickCancel() {
    this.acceptCookies();
    this.click(CANCEL_BUTTON)
  }

  static inputDataWithDifferentPasswords() {

    this.acceptCookies();

    cy.fixture("userForRegistration").then((testData) => {

      const email = "testMail" + Math.floor((Math.random() * 10000) + 1) + "@gmail.com";

      this.type(FIRST_NAME, testData["firstName"]);
      this.type(LAST_NAME, testData["lastName"]);
      this.type(EMAIL_ADDRESS, email);
      this.type(PASSWORD, "password123");
      this.type(CONFIRMATION_PASSWORD, "password999");
      this.selectItem(REGISTRATION_TITLE, testData["title"]);
      this.selectItem(DATE_DAY, testData["dateOfBirthDay"]);
      this.selectItem(DATE_MONTH, testData["dateOfBirthMonth"]);
      this.selectItem(DATE_YEAR, testData["dateOfBirthYear"]);
    });

    this.clickRegister();
    this.isVisible(CONFIRMATION_PASSWORD_ERROR)
    this.hasText(CONFIRMATION_PASSWORD_ERROR, "Passwords do not match")
  }
}