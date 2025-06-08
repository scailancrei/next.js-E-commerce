import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
})

// Add any custom config to be passed to Jest
const config: Config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^providers/(.*)$": "<rootDir>/src/providers/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["node_modules/(?!@supabase/.*)"],
  extensionsToTreatAsEsm: [".ts", ".tsx", ".js", ".jsx"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
