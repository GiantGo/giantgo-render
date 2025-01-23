import { areaList } from '@vant/area-data'

export interface AreaTreeNode {
  value: string
  label: string
  children?: Array<AreaTreeNode>
}

const areaTree: Array<AreaTreeNode> = []

const provinceList = areaList.province_list as Record<string, string>
const cityList = areaList.city_list as Record<string, string>
const countyList = areaList.county_list as Record<string, string>

Object.keys(provinceList).forEach((provinceKey) => {
  const province: AreaTreeNode = {
    value: provinceKey,
    label: provinceList[provinceKey],
    children: []
  }

  const cities: Array<AreaTreeNode> = Object.keys(cityList)
    .filter((cityKey) => cityKey.substring(0, 2) === provinceKey.substring(0, 2))
    .map((cityKey) => {
      return {
        value: cityKey,
        label: cityList[cityKey],
        children: []
      }
    })

  cities.forEach((city) => {
    const counties: Array<AreaTreeNode> = Object.keys(countyList)
      .filter((countyKey) => countyKey.substring(0, 4) === city.value.substring(0, 4))
      .map((countyKey) => {
        return {
          value: countyKey,
          label: countyList[countyKey]
        }
      })

    city.children!.push(...counties)
  })

  province.children!.push(...cities)

  areaTree.push(province)
})

export { areaTree }
