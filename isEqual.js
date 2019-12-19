
function isEqual (a, b) {
  if (a === b) return true

  if (a == null || typeof a !== 'object' ||
        b == null || typeof b !== 'object') return false

  const keysA = Object.keys(a); const keysB = Object.keys(b)

  if (keysA.length != keysB.length) return false

  for (const key of keysA) {
    if (!keysB.includes(key) || !isEqual(a[key], b[key])) return false
  }

  return true
}

module.exports = isEqual
