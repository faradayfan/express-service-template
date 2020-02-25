module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/app.js',
    '<rootDir>/coverage',
    '<rootDir>/.eslintrc.js',
    '<rootDir>/jest.*.config.js',
    '<rootDir>/swagger.docs.js',
    '<rootDir>/node_modules',
    '<rootDir>/routes'
  ],
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  testEnvironment: 'node'
}
