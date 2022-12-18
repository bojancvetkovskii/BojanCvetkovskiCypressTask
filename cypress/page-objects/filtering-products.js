import { BasePage } from "./base-page";

const FILTER_SELECTION = "#filterByMob"
const FILTER_BY_BRAND = ".productFilter:nth-child(7)"
const FILTERING_BY_SPECIFIC_BRAND = "[data-filtername=Aldo]"
const APPLY_BUTTON = ".mobApplyFilter:first-child"
const PRODUCT_BAND = ".productdescriptionbrand"

export class FilteringProducts extends BasePage {

  static selectFilteringByBrand() {
    this.acceptCookies();
    this.click(FILTER_SELECTION);
    this.click(FILTER_BY_BRAND);
    this.click(FILTERING_BY_SPECIFIC_BRAND);
    this.click(APPLY_BUTTON);
  }

  static verifyFilteringByBrandName() {

    // The delay is added since the page had longer response for filtering
    // the products by brand, and the test was sometimes failing
    // because it was checking the unfiltered products
    cy.wait(2000)

    cy.get(PRODUCT_BAND).each((item) => {
      expect(item.text()).to.eq("Aldo");
    });
  }
}