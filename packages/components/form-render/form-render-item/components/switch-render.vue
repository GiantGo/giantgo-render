<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-switch
      :model-value="modelValue"
      :disabled="options.disabled"
      :active-text="options.activeText"
      :inactive-text="options.inactiveText"
      :active-color="options.activeColor"
      :inactive-color="options.inactiveColor"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
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
