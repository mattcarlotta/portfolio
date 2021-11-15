module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|gif|ico|png|jpg|jpeg|svg|ttf|webp|woff2)$":
      "jest-transform-stub",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage",
    "<rootDir>/config",
    "<rootDir>/e2e",
    "<rootDir>/node_modules",
    "<rootDir>/src/polyfills",
    "<rootDir>/public",
    "<rootDir>/src/middlewares",
    "<rootDir>/babel.config.js",
    "<rootDir>/next.config.js",
  ],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*d.ts"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/middlewares",
    "<rootDir>/src/pages",
    "<rootDir>/src/utils/toHaveStyleRule",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/src/utils/setupEnv/index.ts",
    "<rootDir>/src/utils/setupTests/index.ts",
  ],
};
