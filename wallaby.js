module.exports = () => ({
  files: ['tsconfig.json', 'src/**/*.ts', 'test/**/*.ts', 'test/**/*.json', '!src/**/*.spec.ts'],

  tests: ['src/**/*.spec.ts'],

  env: {
    type: 'node',
    runner: 'node'
  },

  testFramework: 'jest'
});
