# tslint-custom-rules-boilerplate

A template for developing a custom TSLint rule, using unit testing.

Easiest developing cycle would be to change some tests (the `.spec` [file](src/myCustomRule.spec.ts)), change the [rule](src/myCustomRule.ts), and then run `npm test` to check everything is as expected.

Inside the [test file](src/myCustomRule.spec.ts) you have a minimal working example of how to test failures (including position and messages), successes and fixers.

After your rule is ready you can compile it using `npm run build`, and use the results in the `dist` folder.
