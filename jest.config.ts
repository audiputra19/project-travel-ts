module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|scss|jpg|png)$': '<rootDir>/__mocks__/fileMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  // Optional: for additional setup
};
  