const isEqual = require('./node_modules/lodash.isequal')

let testsStarted = 0

function test (testName, testFunction) {
  testsStarted++
  console.log(`${testsStarted}: ${testName}`)
  const testObject = {
    equals: (first, second, message) => equals(first, second, message, testName)
  }
  return testFunction(testObject)
}

function equals (first, second, message, testName) {
  if (!isEqual(first, second)) {
    console.error(`${testName}: ${message} failed. comparison was:`)
    console.log(first)
    console.log(second)
    throw new Error(`${testName}: ${message} failure stack trace`)
  }
}

module.exports = test
