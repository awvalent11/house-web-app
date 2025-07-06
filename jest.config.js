module.exports = {
    // testMatch: [
    //     '**/test/*.test.js'
    // ],
    preset: 'ts-jest',
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transformIgnorePatterns: [
        "./node_modules/(?!axios)/"
    ],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    }
};