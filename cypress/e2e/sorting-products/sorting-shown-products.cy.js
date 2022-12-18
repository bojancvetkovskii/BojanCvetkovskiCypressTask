import { SortingProducts } from "../../page-objects/sorting-products";

describe("Sorting products", () => {

  before(() => {
    cy.visit("/usc/mens/shoes-and-boots");
  });


  after(() => {
      cy.request(
          "POST",
          "https://discord.com/api/webhooks/1051487628555452467/NxxbMgtzshPbxHSsEopxP3S4B4Ixxv5PBRREgB8vPTZz3yPRSRBJ56Zk8yWZV-V6vCI9",
          {
              username: "Awesome Webhooks",
              content: "Test for sorting products",
          }
      );
  });


  it("Should sort products by brand name ASC", () => {
    cy.viewport(1000,600);

    // The test is failing because the page is not sorting the products correctly.
    // We can see that the order is the following Boss, BOSS, BOSS, Boss...
    // We expect that the brand names will be sorted ASCII sorted.
    SortingProducts.selectSortingByBrandASC();
    SortingProducts.verifyBrandNamesASC();
  });
});