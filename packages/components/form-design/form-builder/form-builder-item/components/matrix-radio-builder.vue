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
            <td v-for="(column, cIndex) in columns" :key="cIndex">
              <el-radio
                :label="column.value"
                :border="options.border"
                :disabled="options.disabled"
                :model-value="options.defaultValue[rIndex]"
              >
                {{}}
              </el-radio>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'matrixRadioBuilder'
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

const state = inject('state')
const { items: rows } = useOptions(props, 'rowOptions', state.formDesign)
const { items: columns } = useOptions(props, 'options', state.formDesign)
</script>

<style lang="scss" scoped></style>
