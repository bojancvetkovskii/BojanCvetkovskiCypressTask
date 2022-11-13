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
            html: true,
            overwrite: true,
            reportFilename: "report"
        },
        setupNodeEvents(on, config) {
        },
    },
})
