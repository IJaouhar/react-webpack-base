module.exports = {
    preset: 'ts-jest',
    rootDir: './',
    transform: {
        '.(ts|tsx)': 'ts-jest',
    },
    testPathIgnorePatterns: ['<rootDir>/app/src/config/', '<rootDir>/app/src/styles/', '<rootDir>/app/src/constants/'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/app/test/file-mock.ts',
        '\\.(css|scss)$': '<rootDir>/app/test/file-mock.ts',
    },
    collectCoverageFrom: [
        '**/*.ts',
        '!<rootDir>/app/src/**/*.types.ts',
        '!<rootDir>/app/src/**/*.constants.ts',
        '!<rootDir>/app/test/**',
        '!<rootDir>/app/src/**/*.styles.ts',
        '!<rootDir>/app/src/config/**',
        '!<rootDir>/app/src/styles/**',
        '!<rootDir>/app/src/constants/**',
        '!<rootDir>/app/src/models/**',
        '!<rootDir>/app/src/utils/polyfills/**',
    ],
    coverageDirectory: '<rootDir>/reports/coverage',
    coverageReporters: ['html', 'lcov'],
    testResultsProcessor: 'jest-sonar-reporter',
    setupFiles: ['<rootDir>test/init.ts'],
};
