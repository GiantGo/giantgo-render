<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div v-if="columns.length || rows.length" class="matrix-table-wrapper">
      <table class="matrix-table">
        <thead>
          <tr>
            <th />
            <th v-for="(column, index) in columns" :key="index">
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rIndex) in rows" :key="rIndex">
            <td>{{ row.label }}</td>
            <td v-for="(column, cIndex) in data.items[rIndex]" :key="cIndex">
              <el-checkbox
                :label="column.value"
                :border="options.border"
                :disabled="options.disabled"
                :model-value="data.items[rIndex][cIndex]"
              >
                {{}}
              </el-checkbox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-form-item>
</template>

<script setup>
import { inject, reactive, watch } from 'vue'
import { useOptions } from '@giantgo-render/hooks'
import { cloneDeep } from 'lodash-es'
import { isArray } from '@giantgo-render/utils'

defineOptions({
  name: 'matrixCheckboxBuilder'
})

const props = defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const data = reactive({
  items: []
})

const state = inject('state')
const { items: rows } = useOptions(props, 'rowOptions', state.formDesign)
const { items: columns } = useOptions(props, 'options', state.formDesign)

const setInternal = () => {
  const items = []
  const value = cloneDeep(props.options.defaultValue) || []

  for (let r = 0; r < rows.value.length; r++) {
    if (isArray(value[r])) {
      items[r] = value[r]
    } else {
      items[r] = Array(columns.value.length).fill(false)
    }
  }

  data.items = items
}

watch([() => props.options.defaultValue, () => rows, () => columns], setInternal, { deep: true })
</script>

<style lang="scss" scoped></style>
