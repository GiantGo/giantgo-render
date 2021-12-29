import region from 'china-area-data'
import { hasOwn } from './shared'

const areaTree = []
const codeMap = {}

function assembleAreaTree(parentCode, areaTree) {
  if (hasOwn(region, parentCode)) {
    const codes = Object.keys(region[parentCode])

    codes.forEach((code) => {
      codeMap[code] = region[parentCode][code]
      areaTree.push({
        value: code,
        label: region[parentCode][code],
        children: assembleAreaTree(code, [])
      })
    })

    return areaTree
  } else {
    return null
  }
}

assembleAreaTree(86, areaTree)

export { areaTree, codeMap }
