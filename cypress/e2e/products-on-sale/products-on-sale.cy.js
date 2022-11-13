describe("Products on sale page", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/sale/mens-footwear-sale")
    })

    it("Should have discount price on every product in sale page", () => {
        cy.get(".s-producttext-price.s-producttext-withticket").each((item) => {
            const priceWithDiscountObject = item.children("div.s-largered")
            const priceWithDiscount = priceWithDiscountObject.children(".CurrencySizeLarge").text().replace("€", "")

            const firstPriceObject = item.children(".RefandPrice")
            const firstPrice = firstPriceObject.children(".s-smalltext").text().replace("€", "")
            expect(priceWithDiscountObject).to.exist
            expect(firstPriceObject).to.exist

            expect(parseInt(firstPrice)).is.greaterThan(parseInt(priceWithDiscount))
        })
    })
})