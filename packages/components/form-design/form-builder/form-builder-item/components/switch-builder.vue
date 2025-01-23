<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-switch
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :active-text="options.activeText"
      :inactive-text="options.inactiveText"
      :active-color="options.activeColor"
      :inactive-color="options.inactiveColor"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'switchBuilder'
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
