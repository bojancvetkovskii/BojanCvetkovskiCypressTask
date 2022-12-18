import { ProductsOnSales } from "../../page-objects/products-on-sale";

describe("Products on sale page", () => {

  before(() => {
    cy.visit("/usc/sale/mens");
  });

  /* after(() => {
      cy.request(
          "POST",
          "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
          {
              username: "Awesome Webhooks",
              content: "Test for sale products",
          }
      );
  });
   */

  it("Should have discount price on every product in sale page", () => {
    ProductsOnSales.checkIfProductsHaveDiscount();
  });
});