import { it } from "mocha";
import { RegisteringForm } from "../../page-objects/registering-form";
import { HomePage } from "../../page-objects/home-page";

describe("Registering new user tests", () => {

  beforeEach(() => {
    cy.visit("/registration");
  });

  after(() => {
      cy.request(
          "POST",
          "https://discord.com/api/webhooks/1051487628555452467/NxxbMgtzshPbxHSsEopxP3S4B4Ixxv5PBRREgB8vPTZz3yPRSRBJ56Zk8yWZV-V6vCI9",
          {
              username: "Awesome Webhooks",
              content: "Test for registering new user",
          }
      );
  });


  it("Should create new user", () => {
    RegisteringForm.inputData();
    HomePage.checkIfContainerVisible();
  });

  it("Should show error messages when submitting empty form", () => {
    RegisteringForm.clickRegister();
    RegisteringForm.validateErrorsForSubmittedEmptyForm();
  });

  it("Should return to home page when 'Cancel' button is pressed", () => {

    RegisteringForm.clickCancel();
    HomePage.checkIfContainerVisible();
  });


  it("Should not register user when password and confirmation password are different", () => {
    RegisteringForm.inputDataWithDifferentPasswords();
  });
});