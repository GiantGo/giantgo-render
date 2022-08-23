<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-radio-group
      :model-value="modelValue"
      :disabled="options.disabled"
      @update:modelValue="$emit('update:modelValue', $event)"
    >
      <el-radio v-for="item in items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'radioRender'
})

const props = defineProps({
  path: String,
  modelValue: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
const state = inject('state')
const { items } = useOptions(props, state.formDesign)
</script>

<style lang="scss" scoped></style>
