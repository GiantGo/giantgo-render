<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-color-picker
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :show-alpha="options.showAlpha"
    ></el-color-picker>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'colorPickerBuilder'
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
