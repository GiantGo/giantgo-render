<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-checkbox-group v-if="!options.hidden" :model-value="options.defaultValue" :disabled="options.disabled">
      <el-checkbox v-for="item in items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script setup>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

defineOptions({
  name: 'checkboxBuilder'
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
const { items } = useOptions(props, state.formDesign)
</script>

<style lang="scss" scoped></style>
