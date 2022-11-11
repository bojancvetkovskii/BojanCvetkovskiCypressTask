const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        chromeWebSecurity: false,
        baseUrl: "https://lv.sportsdirect.com",
        setupNodeEvents(on, config) {
        },
    }
})