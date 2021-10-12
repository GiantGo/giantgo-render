<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-checkbox-group
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
    >
      <el-checkbox v-for="item in options.options.items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'checkboxRender',
  components: {},
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
