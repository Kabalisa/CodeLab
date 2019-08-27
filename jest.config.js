module.export = {
  preset: 'react-native',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFiles: ['./setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub'
  },
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx', 'mp4'],
  testMatch: ['**/tests/**/*.js?(x)', '**/?(*.)+(test).js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\']
};
