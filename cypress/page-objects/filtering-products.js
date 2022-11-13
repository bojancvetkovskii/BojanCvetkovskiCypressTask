const FILTERING_BY_SPECIFIC_BRAND = ".FilterName[data-filtername=Aldo]";

export class FilteringProducts {

    static selectFilteringByBrand() {
        cy.get(FILTERING_BY_SPECIFIC_BRAND).click({force: true})
    }

    static verifyFilteringByBrandName() {
        cy.get(".productdescriptionbrand").each((item) => {
            expect(item.text()).to.eq("Aldo")
        })
    }
}