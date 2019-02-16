const isEqual = require('./node_modules/lodash.isequal')

let testsStarted = 0

function test (testName, testFunction) {
  const testObject = {
    equals: (first, second, message) => {
      testsStarted++
      return equals(first, second, `${testsStarted}: ${testName} ${message}`)
    }
  }
  return testFunction(testObject)
}

function equals (first, second, message) {
  if (!isEqual(first, second)) {
    console.error(`${message}: failed. comparison was:`)
    console.log(first)
    console.log(second)
    throw new Error(`${message} failure`)
  } else {
    console.log(`${message} ✓`)
  }
}

module.exports = test
