/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
  coverageReporters: ['json', 'json-summary', 'text', 'lcov', 'lcovonly', 'clover'],
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
      branches: 80,
      functions: 80,
    },
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: ['\\\\node_modules\\\\', '\\\\dist\\\\'],
  setupFilesAfterEnv: ['<rootDir>/src/config/setupTests.ts'],
};
