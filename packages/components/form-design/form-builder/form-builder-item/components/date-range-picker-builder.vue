<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-date-picker
      v-if="!options.hidden"
      type="daterange"
      :model-value="options.defaultValue"
      :placeholder="options.placeholder"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :format="options.format"
      :prefix-icon="ElementPlusIconsVue[options.prefixIcon]"
    />
  </el-form-item>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

defineOptions({
  name: 'dateRangePickerBuilder'
})
defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
