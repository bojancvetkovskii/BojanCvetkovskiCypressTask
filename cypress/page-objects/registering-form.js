import { BasePage } from "./base-page";

const REGISTRATION_FORM_CONTAINER = "#RegistrationForm"
export class RegisteringForm extends BasePage {
  static checkIfContainerVisible(){
    this.isVisible(REGISTRATION_FORM_CONTAINER)
  }
}