const ALLOW_COOKIE_BUTTON = "#onetrust-accept-btn-handler";

export class BasePage {

  static acceptCookies() {
    // This is added since I had issue with the overlay for accepting cookies
    // Cypress Error: I had the following error cy.click() failed because
    // element is being covered by another element. Fix this problem or use
    // {force: true} to disable error checking.
    this.click(ALLOW_COOKIE_BUTTON);
  }

  static click(selector) {
    cy.get(selector).click();
  }

  static type(selector, text) {
    cy.get(selector).type(text);
  }

  static hasText(selector, text) {
    cy.get(selector).should("have.text", text);
  }

  static doesNotExist(selector) {
    cy.get(selector).should("not.exist");
  }

  static isVisible(selector) {
    cy.get(selector).should("be.visible");
  }

  static loginStandardUserWithoutUI(page) {
    cy.setCookie("SDLV_DNNEmailAddress", "mail%40gmai.com");
    cy.visit(page, { failOnStatusCode: false });
  }

  static selectItem(selector, value) {
    cy.get(selector).select(value);
  }

  static clickFirst(selector) {
    cy.get(selector).first().click();
  }

  static saveFirstElementTextAsAlias(selector, alias) {
    cy.get(selector)
      .first()
      .then((product) => {
        cy.wrap(product.text()).as(alias);
      });
  }

  static validateFirstElementTextByAlias(selector, alias) {
    cy.get("@" + alias).then((lastAddedName) => {
      cy.get(selector)
        .first()
        .then((el) => {
          cy.wrap(lastAddedName).should("be.equal", el.text());
        });
    });
  }
}