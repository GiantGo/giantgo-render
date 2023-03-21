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
                name="rIndex"
                :model-value="data.items[rIndex]"
                @change="change(rIndex, column.value)"
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
import { inject, onMounted, reactive, watch } from 'vue'
import { cloneDeep } from 'lodash-es'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'matrixRadioRender'
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

const change = (rIndex, value) => {
  data.items[rIndex] = value
  emit('update:modelValue', data.items)
}

const setInternal = () => {
  data.items = cloneDeep(props.modelValue)
}

onMounted(setInternal)
watch(() => props.modelValue, setInternal)
</script>

<style lang="scss" scoped></style>
