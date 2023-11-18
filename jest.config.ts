export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "^.+\\.(svg|jpg|png)$": "jest-svg-transformer",
        "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    },
}