import { BasePage } from "./base-page";

const HOME_PAGE_CONTAINER = ".Home";

export class HomePage extends BasePage {

  static checkIfContainerVisible() {
    this.isVisible(HOME_PAGE_CONTAINER);
  }
}