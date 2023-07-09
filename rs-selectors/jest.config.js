module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./setupLocalstorage.ts'],
    testEnvironment: 'jest-environment-jsdom',
    "moduleNameMapper": {
        "\\.(css)$": "identity-obj-proxy"
    }
};