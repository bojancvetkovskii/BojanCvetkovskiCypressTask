import { it } from "mocha";
import { RegisteringForm } from "../../page-objects/registering-form";
import { HomePage } from "../../page-objects/home-page";

describe("Registering new user tests", () => {

  beforeEach(() => {
    cy.visit("/registration");
  });

  /* after(() => {
      cy.request(
          "POST",
          "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
          {
              username: "Awesome Webhooks",
              content: "Test for registering new user",
          }
      );
  });
  */

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