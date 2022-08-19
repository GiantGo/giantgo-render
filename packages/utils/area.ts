import region from 'china-area-data'
import { hasOwn } from './types'

interface AreaTreeNode {
  value: string
  label: string
  children: Array<AreaTreeNode> | null
}

interface AreaCodeMap {
  [propName: string]: AreaTreeNode
}

const areaTree: Array<AreaTreeNode> = []
const codeMap: AreaCodeMap = {}

function assembleAreaTree(parentCode: string, areaTree: Array<AreaTreeNode>): Array<AreaTreeNode> | null {
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

assembleAreaTree('86', areaTree)

export { areaTree, codeMap }
