export function isPrimitive(val) {
  return !['object', 'function'].includes(typeof val) || val === null
}

export function hasOwn(obj, key) {
  return Object.hasOwnProperty.call(obj, key)
}
