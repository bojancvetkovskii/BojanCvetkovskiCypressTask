const SORTING_BY_BRAND_ASC = "#MobSortOptions_brand_asc";

export class SortingProducts {

    static selectSortingByBrandASC() {
        cy.get(SORTING_BY_BRAND_ASC).type("brand_asc", {force: true})
    }

    static verifyBrandNamesASC() {
        let actualItems = []
        cy.get(".productdescriptionbrand").each((item) => {
            actualItems.push(item.text())
        })

        cy.wrap(actualItems).then(() => {
            let expectedItems = [...actualItems].sort((item1, item2) => item1.localeCompare(item2))
            expect(actualItems).to.deep.eq(expectedItems)
            // Tests are failing because I believe the page itself has broken sort function.
        })
    }
}