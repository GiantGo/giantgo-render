import { areaList } from '@vant/area-data'

interface AreaTreeNode {
  value: string
  label: string
  children?: Array<AreaTreeNode>
}

const areaTree: Array<AreaTreeNode> = []

Object.keys(areaList.province_list).forEach((provinceKey) => {
  const province: AreaTreeNode = {
    value: provinceKey,
    label: areaList.province_list[provinceKey],
    children: []
  }

  const cities: Array<AreaTreeNode> = Object.keys(areaList.city_list)
    .filter((cityKey) => cityKey.substring(0, 2) === provinceKey.substring(0, 2))
    .map((cityKey) => {
      return {
        value: cityKey,
        label: areaList.city_list[cityKey],
        children: []
      }
    })

  cities.forEach((city) => {
    const counties: Array<AreaTreeNode> = Object.keys(areaList.county_list)
      .filter((countyKey) => countyKey.substring(0, 4) === city.value.substring(0, 4))
      .map((countyKey) => {
        return {
          value: countyKey,
          label: areaList.county_list[countyKey]
        }
      })

    city.children!.push(...counties)
  })

  province.children!.push(...cities)

  areaTree.push(province)
})

export { areaTree }
