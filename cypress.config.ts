import { defineConfig } from "cypress"

export default defineConfig({
  projectId: "nj9ghx",
  e2e: {
    experimentalPromptCommand: true,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
