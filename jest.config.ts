/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/{components,patterns}/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['json', 'json-summary', 'text', 'lcov', 'lcovonly', 'clover'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\dist\\\\'],
  // testEnvironment: 'jest-environment-jsdom-fourteen',
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
  timers: 'fake',
};
