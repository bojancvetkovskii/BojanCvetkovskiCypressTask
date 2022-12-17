import { BasePage } from "./base-page";

const BRAND_DESCRIPTION = ".productdescriptionbrand";
const SORTING_CONTAINER = ".mobSortFilter > .MobSortSelector";
const BRAND_ASC_ITEM = "#MobSortOptions_brand_asc[name=MobSortOptions]";

export class SortingProducts extends BasePage {

  static selectSortingByBrandASC() {
    this.click(SORTING_CONTAINER);
    this.acceptCookies();
    cy.get(BRAND_ASC_ITEM).check();
  }

  static verifyBrandNamesASC() {
    let actualItems = [];

    cy.get(BRAND_DESCRIPTION).each((item) => {
      actualItems.push(item.text());
    });

    cy.wrap(actualItems).then(() => {
      let expectedItems = [...actualItems].sort();
      expect(actualItems).to.deep.eq(expectedItems);
    });
  }
}