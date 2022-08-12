<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-switch
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
      :active-text="options.activeText"
      :inactive-text="options.inactiveText"
      :active-color="options.activeColor"
      :inactive-color="options.inactiveColor"
    ></el-switch>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'switchRender'
})
defineProps({
  path: String,
  modelValue: Boolean,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
