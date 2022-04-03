module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  moduleDirectories: ['<rootDir>', 'node_modules'],
  moduleNameMapper: {
    '~(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|gif|ico|png|jpg|jpeg|svg|ttf|webp|woff2)$':
      'jest-transform-stub'
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next',
    '<rootDir>/coverage',
    '<rootDir>/config',
    '<rootDir>/e2e',
    '<rootDir>/node_modules',
    '<rootDir>/src/polyfills',
    '<rootDir>/public',
    '<rootDir>/src/middlewares',
    '<rootDir>/src/utils',
    '<rootDir>/babel.config.js',
    '<rootDir>/next.config.js'
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*d.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/icons',
    '<rootDir>/src/pages',
    '<rootDir>/src/styles',
    '<rootDir>/src/types',
    '<rootDir>/src/utils',
    '<rootDir>/src/index.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/utils/setupTests.ts']
}
