<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-select
      :model-value="options.defaultValue"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :filterable="options.filterable"
      :placeholder="options.placeholder"
      :no-data-text="options.noDataText"
      :no-match-text="options.noMatchText"
    >
      <el-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'selectBuilder'
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
const { items } = useOptions(props, 'options', state.formDesign)
</script>

<style lang="scss" scoped></style>
