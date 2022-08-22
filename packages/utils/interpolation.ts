export function validateInterpolation(str: string): boolean {
  const re = /\{\{((?:.|\n)+?)\}\}/g
  return re.test(str)
}

export function getInterpolation(str: string): string {
  const interpolationReg = /\{\{((?:.|\n)+?)\}\}/g

  if (interpolationReg.test(str)) {
    interpolationReg.lastIndex = 0
    return interpolationReg.exec(str)![1]
  } else {
    return str
  }
}
