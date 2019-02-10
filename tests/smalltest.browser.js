import test from '../index.browser.js'

// Confusing but this is a test to make sure smalltest works from the browser (⊙_☉)

test('Test function actually works in browser', t => {
  const actual = {allGood: true}
  const expected = {allGood: true}
  t.equals(actual, expected, 'all is good')
})

try {
  test('Test function throws in browser', t => {
    const actual = {thisShouldBreak: true}
    const expected = {thisShouldBreak: false}
    t.equals(actual, expected, 'this should appear in a console.error')
  })
} catch (error) {
  console.log(error instanceof Error)
}
