import { ProductsOnSales } from "../../page-objects/products-on-sale";

describe("Products on sale page", () => {

  before(() => {
    cy.visit("/usc/sale/mens");
  });

  after(() => {
      cy.request(
          "POST",
          "https://discord.com/api/webhooks/1051487628555452467/NxxbMgtzshPbxHSsEopxP3S4B4Ixxv5PBRREgB8vPTZz3yPRSRBJ56Zk8yWZV-V6vCI9",
          {
              username: "Awesome Webhooks",
              content: "Test for sale products",
          }
      );
  });


  it("Should have discount price on every product in sale page", () => {
    ProductsOnSales.checkIfProductsHaveDiscount();
  });
});