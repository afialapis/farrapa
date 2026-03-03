const isEmptyObject = (o) => Object.keys(o).length === 0 && o.constructor === Object

function objFilter(obj, func) {
  let isNum = true
  Object.keys(obj).forEach((k) => {
    if (Number.isNaN(parseInt(k, 10))) {
      isNum = false
      return
    }
  })
  const parseK = (k) => (isNum ? parseInt(k, 10) : k)
  const out = {}
  Object.keys(obj)
    .filter((key) => func(parseK(key), obj[key]))
    .map((key) => (out[parseK(key)] = obj[key]))
  return out
}

function objClone(obj) {
  let copy

  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" !== typeof obj) return obj

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date()
    copy.setTime(obj.getTime())
    return copy
  }

  // Handle Array
  if (Array.isArray(obj)) {
    copy = []
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = objClone(obj[i])
    }
    return copy
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {}
    for (const attr in obj) {
      if (Object.hasOwn(obj, attr)) copy[attr] = objClone(obj[attr])
    }
    return copy
  }

  throw new Error("Unable to copy obj! Its type isn't supported")
}

function objAreEqual(...args) {
  /**
   * https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
   */
  let i, l, leftChain, rightChain

  function compare2Objects(x, y) {
    let p

    // remember that NaN === NaN returns false
    // and isNaN(undefined) returns true
    if (Number.isNaN(x) && Number.isNaN(y) && typeof x === "number" && typeof y === "number") {
      return true
    }

    // Compare primitives and functions.
    // Check if both arguments link to the same object.
    // Especially useful on the step where we compare prototypes
    if (x === y) {
      return true
    }

    // Works in case when functions are created in constructor.
    // Comparing dates is a common scenario. Another built-ins?
    // We can even handle functions passed across iframes
    if (
      (typeof x === "function" && typeof y === "function") ||
      (x instanceof Date && y instanceof Date) ||
      (x instanceof RegExp && y instanceof RegExp) ||
      (x instanceof String && y instanceof String) ||
      (x instanceof Number && y instanceof Number)
    ) {
      return x.toString() === y.toString()
    }

    // At last checking prototypes as good as we can
    if (!(x instanceof Object && y instanceof Object)) {
      return false
    }

    if (Object.prototype.isPrototypeOf.call(x, y) | Object.hasOwn(y, x)) {
      return false
    }

    if (x.constructor !== y.constructor) {
      return false
    }

    if (x.prototype !== y.prototype) {
      return false
    }

    // Check for infinitive linking loops
    if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
      return false
    }

    // Quick checking of one object being a subset of another.
    // todo: cache the structure of arguments[0] for performance
    for (p in y) {
      if (Object.hasOwn(y, p) !== Object.hasOwn(x, p)) {
        return false
      } else if (typeof y[p] !== typeof x[p]) {
        return false
      }
    }

    for (p in x) {
      if (Object.hasOwn(y, p) !== Object.hasOwn(x, p)) {
        return false
      } else if (typeof y[p] !== typeof x[p]) {
        return false
      }

      switch (typeof x[p]) {
        case "object":
        case "function":
          leftChain.push(x)
          rightChain.push(y)

          if (!compare2Objects(x[p], y[p])) {
            return false
          }

          leftChain.pop()
          rightChain.pop()
          break

        default:
          if (x[p] !== y[p]) {
            return false
          }
          break
      }
    }

    return true
  }

  if (args.length < 1) {
    return true //Die silently? Don't know how to handle such case, please help...
    // throw "Need two or more arguments to compare";
  }

  for (i = 1, l = args.length; i < l; i++) {
    leftChain = [] //Todo: this can be cached
    rightChain = []

    if (!compare2Objects(args[0], args[i])) {
      return false
    }
  }

  return true
}

export { isEmptyObject, objFilter, objClone, objAreEqual }
