describe("Products on sale page", () => {

    before(() => {
        cy.visit("https://lv.sportsdirect.com/sale/mens-footwear-sale")
    })

    after(() => {
        cy.request(
            "POST",
            "https://discord.com/api/webhooks/955086226547965952/WuaK1GMcRDVkOexPEz60OETIorJOvQeX4L1ftw7jDn_NuDM_g5J20FkMAcY_mMoUmXPr",
            {
                username: "Awesome Webhooks",
                content: "Test for sale products",
            }
        );
    });

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