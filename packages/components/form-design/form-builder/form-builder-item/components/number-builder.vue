<template>
  <el-form-item :prop="path" :label="options.label">
    <el-input-number
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :min="options.min"
      :max="options.max"
      :disabled="options.disabled"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'numberBuilder'
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
