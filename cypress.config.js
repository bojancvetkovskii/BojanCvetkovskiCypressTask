const {defineConfig} = require('cypress')

module.exports = defineConfig({
    projectId: "8a17qo",
    e2e: {
        chromeWebSecurity: false,
        baseUrl: "https://lv.sportsdirect.com",
        watchForFileChanges: false,
        reporter: "mochawesome",
        reporterOptions: {
            reportDir: "cypress/results",
            html: false,
            overwrite: false,
        },
        setupNodeEvents(on, config) {
        },
    },
})
