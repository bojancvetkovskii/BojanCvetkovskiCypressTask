import {SortingProducts} from "../../page-objects/sorting-products";

describe("Sorting products", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/usc/mens/shoes-and-boots")
    })

    it("Should sort products by brand name ASC", () => {
        SortingProducts.selectSortingByBrandASC()
        SortingProducts.verifyBrandNamesASC()
    })
})