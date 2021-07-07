module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleDirectories: ["<rootDir>/src", "node_modules"],
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/utils/__mocks__/fileMock.ts",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss)$":
      "./node_modules/jest-css-modules-transform",
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next",
    "<rootDir>/coverage",
    "<rootDir>/config",
    "<rootDir>/e2e",
    "<rootDir>/node_modules",
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
  setupFilesAfterEnv: ["<rootDir>/src/utils/setupTests/index.ts"],
};
