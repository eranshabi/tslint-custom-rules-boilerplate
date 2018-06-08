# tslint-custom-rules-boilerplate

A template for developing a custom TSLint rule, using unit testing.

Easiest developing cycle would be to change some tests (the `.spec` file), change the rule, and then run `npm test` to check everything is as expected.

Inside the test file you have a working example of how to test failures (including position and messages), successes and fixers.

After your rule is ready you can compile it using `npm run build`, and use the results in the `dist` folder.
