import {FilteringProducts} from "../../page-objects/filtering-products";

describe("Filtering products", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/usc/mens/shoes-and-boots")
    })

    it("Should filter products by specific brand", () => {
        FilteringProducts.selectFilteringByBrand()
        FilteringProducts.verifyFilteringByBrandName()
    })
})