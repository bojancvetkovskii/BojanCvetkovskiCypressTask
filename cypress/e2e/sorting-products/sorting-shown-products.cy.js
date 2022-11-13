import {SortingProducts} from "../../page-objects/sorting-products";

describe("Sorting products", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/usc/mens/shoes-and-boots")
    })

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Awesome Webhooks",
                content: "Test for sorting products",
            }
        );
    });

    it("Should sort products by brand name ASC", () => {
        SortingProducts.selectSortingByBrandASC()
        SortingProducts.verifyBrandNamesASC()
    })
})