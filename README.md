# smalltest

really small tester

I wanted to debug tests and code from the browser instead of node, but
didn't feel like learning a lot about a new test API framework.

this api has one method that's this:

```js
import test from 'smalltest'

test('This is the test description', t => {
  const actual = methodToTest()
  const expected = {b: false}
  t.equals(actual, expected, 'optional description of expectation')
})
```

which does a `lodash` `isEqual` on the first two params, which `===` compares primitives and deep compares objects.

if they're not equal `smalltest` throws an error.

## setup

```
npm i -D smalltest
```

Then the complicated part: use whatever javascript dev environment (e.g. webpack) to setup another dev server serving `/tests/index.html` that can import your code & smalltest.

### Example Webpack Setup:

`webpack.tests.config.js`

```
module.exports = {
  entry: './tests/index.js',
  output: {
    filename: 'tests.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    port: 5001,
    open: true,
    openPage: 'tests.html'
  }
}
```
