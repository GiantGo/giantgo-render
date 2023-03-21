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
                :border="options.border"
                :disabled="options.disabled"
                name="rIndex"
                :model-value="data.items[rIndex][cIndex]"
                @change="change(rIndex, cIndex, $event)"
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
import { inject, onMounted, reactive, watch } from 'vue'
import { useOptions } from '@giantgo-render/hooks'
import { cloneDeep } from 'lodash-es'
import { isArray } from '@giantgo-render/utils'

defineOptions({
  name: 'matrixCheckboxRender'
})

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  path: String,
  modelValue: Array,
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

const change = (rIndex, cIndex, value) => {
  data.items[rIndex][cIndex] = value
  emit('update:modelValue', data.items)
}

const setInternal = () => {
  const items = []
  const value = cloneDeep(props.modelValue) || []

  for (let r = 0; r < rows.value.length; r++) {
    if (isArray(value[r])) {
      items[r] = value[r]
    } else {
      items[r] = Array(columns.value.length).fill(false)
    }
  }

  data.items = items
}

onMounted(setInternal)
watch([() => props.modelValue, () => rows, () => columns], setInternal, { deep: true })
</script>

<style lang="scss" scoped></style>
