export function isPrimitive(val: any) {
  return !['object', 'function'].includes(typeof val) || val === null
}

export { hasOwn, NOOP } from '@vue/shared'
