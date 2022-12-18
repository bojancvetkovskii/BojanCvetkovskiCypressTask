import { it } from "mocha";
import { LoginForm } from "../../page-objects/login-form";
import { RegisteringForm } from "../../page-objects/registering-form";
import { HomePage } from "../../page-objects/home-page";
import { BasePage } from "../../page-objects/base-page";
import { ForgottenPassword } from "../../page-objects/forgotten-password";

describe("Login test cases", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Redirect user to a registering page", () => {
    LoginForm.clickContinueSecurelyButton();
    RegisteringForm.checkIfContainerVisible();
  });

  // Sometimes this test case fails because cypress doesn't type the whole email
  // address. This triggers the error for invalid email format and the test is broken
  // Example: mail@g
  it("Logging in with a valid user", () => {

    cy.fixture("existingUser").then((testData) => {
      LoginForm.inputLoginDataAndLogin(testData["email"], testData["password"]);
    });

    HomePage.checkIfContainerVisible();
  });

  // Sometimes this test case fails because cypress doesn't type the whole email
  // address. This triggers the error for invalid email format and the test is broken
  // Example: randomEmail@
  it("Logging in with incorrect login details", () => {
    LoginForm.inputLoginDataAndLogin("randomEmail@gmail.com", "hkksdjfhdsdsf");
    LoginForm.verifyErrorMessage(
      "This email address or password is incorrect"
    );
  });

  it("Logging in with a email address with invalid format", () => {
    LoginForm.inputLoginDataAndLogin("random_email", "hkksdjfhdsdsf");
    LoginForm.verifyErrorMessage(
      "The Email Address field is not a valid e-mail address."
    );
  });

  it("Trying to log in without a password", () => {
    LoginForm.inputEmail("mail@gmai.com");
    LoginForm.acceptCookies();
    LoginForm.clickLoginButton();
    LoginForm.verifyErrorMessage("Please provide a password");
  });

  it("Trying to log in without an email", () => {
    LoginForm.inputPassword("randomPassword");
    LoginForm.acceptCookies();
    LoginForm.clickLoginButton();
    LoginForm.verifyErrorMessage("Please provide an email address");
  });

  it("Logging in without using the UI and just using the cookies", () => {
    BasePage.loginStandardUserWithoutUI("/");
    HomePage.checkIfContainerVisible();
  });

  it("Successfully change forgotten password", () => {
    LoginForm.acceptCookies();
    LoginForm.clickOnForgottenPasswordLink();

    cy.fixture("existingUser").then((testData) => {
      ForgottenPassword.sendEmail(testData["email"]);
    });
  });

  it("Cancel changing password", () => {
    LoginForm.acceptCookies();
    LoginForm.clickOnForgottenPasswordLink();
    ForgottenPassword.clickCancel();
    LoginForm.isPageContainerVisible();
  });
});