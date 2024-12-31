const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    projectId: "fu2s15",
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    video: true,
    //specPattern: "cypress/e2e/**/*.dev.{js,jsx,ts,tsx}",
    // defaultCommandTimeout: 20000,  // 4000
    // pageLoadTimeout: 3000,
    // viewportWidth: 390,
    // viewportHeight: 844,
    //retries: {"openMode": 3, "runMode": 2 },
    env: {
      username: "tomsmith",
      password: "SuperSecretPassword!",
      version: "",
      cookivalue: "orangehrm=lfek9om169dlle5bra5petgo54",
    },

    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", { downloadFile });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "**/*.feature",
  },
});
