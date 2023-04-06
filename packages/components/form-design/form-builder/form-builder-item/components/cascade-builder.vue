<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      :model-value="options.defaultValue"
      :options="items"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
    />
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'cascaderBuilder'
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
