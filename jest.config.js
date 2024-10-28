/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^~/(.+)': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
}
