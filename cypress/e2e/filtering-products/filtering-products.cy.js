import {FilteringProducts} from "../../page-objects/filtering-products";

describe("Filtering products", () => {

   after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/1051487628555452467/NxxbMgtzshPbxHSsEopxP3S4B4Ixxv5PBRREgB8vPTZz3yPRSRBJ56Zk8yWZV-V6vCI9",
            {
                username: "Awesome Webhooks",
                content: "Test for filtering products",
            }
        );
    });


    before(() => {
        cy.visit("usc/mens/shoes-and-boots")
    })

    it("Should filter products by specific brand", () => {
        cy.viewport(1000,600);
        FilteringProducts.selectFilteringByBrand();
        FilteringProducts.verifyFilteringByBrandName();
    })
})