module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: false,
  // setupFilesAfterEnv: ['./jest-each.js'],
  testMatch: ["<rootDir>/test/**/*.test.[jt]s"],
  collectCoverage: false,
  // coveragePathIgnorePatterns: ['index.js'],
  // modulePathIgnorePatterns: ['jest-env.js', 'dist', 'config'],
  reporters: [
    'default',
    [
      'jest-summary-reporter',
      {
        failuresOnly: true,
      },
    ],
  ],
  // roots: [
  //   'chrome/',
  //   'main/',
  //   'emulators/',
  //   'mitm/',
  //   'remote/',
  //   'remote-over-sockets/',
  //   'shared/',
  // ],
  moduleDirectories: [
    'node_modules',
    // 'chrome/node_modules',
    // 'main/node_modules',
    // 'emulators/node_modules',
    // 'mitm/node_modules',
    // 'remote/node_modules',
    // 'remote-over-sockets/node_modules',
    // 'shared/**/node_modules',
  ],
};
