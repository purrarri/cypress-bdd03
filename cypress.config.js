const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);
      
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "",
    defaultCommandTimeout: 7000,
    chromeWebSecurity: false,
    viewportWidth: 1280,
    viewportHeight: 800
  
    },
  },
});
