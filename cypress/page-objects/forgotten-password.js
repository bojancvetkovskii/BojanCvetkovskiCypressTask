import { BasePage } from "./base-page";

const EMAIL_ADDRESS_FIELD="#EmailAddress"
const SEND_EMAIL_BUTTON="#EmailRequestSubmit"
const SUCCESSFUL_PASSWORD_CHANGE_CONTAINER=".dnnFormMessage.dnnFormSuccess"
const CANCEL_BUTTON=".cancelWrap"

export class ForgottenPassword extends BasePage {

  static sendEmail(email){
    this.type(EMAIL_ADDRESS_FIELD, email)
    this.click(SEND_EMAIL_BUTTON)
    this.hasText(SUCCESSFUL_PASSWORD_CHANGE_CONTAINER,
      "\n                            If the email address entered was correct, " +
      "you should receive a new email shortly with a link to reset your password.\n" +
      "                        ")
  }

  static clickCancel(){
    this.click(CANCEL_BUTTON)
  }
}