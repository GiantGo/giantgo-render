<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-radio-group :model-value="options.defaultValue" :disabled="options.disabled">
      <el-radio v-for="item in items" :key="item.value" :label="item.value" :border="options.border">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'radioBuilder'
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
