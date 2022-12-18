import { BasePage } from "./base-page";

const PRICE_WITH_DISCOUNT = "div.s-largered .CurrencySizeLarge";
const PRICE_WITHOUT_DISCOUNT = ".RefandPrice .s-smalltext";

export class ProductsOnSales extends BasePage {

  static checkIfProductsHaveDiscount() {

    cy.get(PRICE_WITH_DISCOUNT).then((pricesWithDiscountObjects) => {

      const pricesWithDiscount = Array.from(pricesWithDiscountObjects,
        el => parseInt(el.textContent.replace("€", "")));

      cy.get(PRICE_WITHOUT_DISCOUNT).then(pricesWithoutDiscountObjects => {
        const pricesWithoutDiscount = Array.from(pricesWithoutDiscountObjects,
          el => parseInt(el.textContent.replace("€", "")));

        pricesWithoutDiscount.forEach((price, index) => {
          expect(price).to.be.greaterThan(pricesWithDiscount.at(index));
        });
      });

    });
  }
}
