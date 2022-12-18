import {FilteringProducts} from "../../page-objects/filtering-products";

describe("Filtering products", () => {

   /*
   after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Awesome Webhooks",
                content: "Test for filtering products",
            }
        );
    });
    */

    before(() => {
        cy.visit("usc/mens/shoes-and-boots")
    })

    it("Should filter products by specific brand", () => {
        cy.viewport(1000,600);
        FilteringProducts.selectFilteringByBrand();
        FilteringProducts.verifyFilteringByBrandName();
    })
})