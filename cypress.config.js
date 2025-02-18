const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/Integration/Examples/*.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://rahulshettyacademy.com"
  },
})