const test = require('../index.js')

// Confusing but this is a test to make sure smalltest works in node (⊙_☉)

test('Test function actually works in node', t => {
  const actual = {allGood: true}
  const expected = {allGood: true}
  t.equals(actual, expected, 'all is good')
})

try {
  test('Test function throws in node', t => {
    const actual = {thisShouldBreak: true}
    const expected = {thisShouldBreak: false}
    t.equals(actual, expected, 'this should appear in a console.error')
  })
} catch (error) {
  console.log(error instanceof Error)
}

test('Test function async', async t => {
  const actual = {allGood: true}
  const expected = {allGood: true}
  await Promise.resolve({})
  t.equals(actual, expected, 'all is good in async')
})

async function testingAsync () {
  let firstHappened = false
  await test('Test function can be awaited', async t => {
    const actual = {allGood: true}
    const expected = {allGood: true}
    await Promise.resolve({})
    t.equals(actual, expected, 'all is good in awaiting')
    firstHappened = true
  })

  test('Test function can be awaited final', t => {
    t.equals(firstHappened, true, 'tests can happen in order')
  })
}

testingAsync()
