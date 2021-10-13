export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]'
}

export function isArray(value) {
  return Object.prototype.toString.call(value) === '[object Array]'
}

export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]'
}

export function isDefined(value) {
  return typeof value !== 'undefined'
}

export function isEmptyObject(obj) {
  var name
  for (name in obj) {
    return false
  }
  return true
}

export function isPrimitive(val) {
  return !['object', 'function'].includes(typeof val) || val === null
}

export function hasOwn(obj, key) {
  return Object.hasOwnProperty.call(obj, key)
}
