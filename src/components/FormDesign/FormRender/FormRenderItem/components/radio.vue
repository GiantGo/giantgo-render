<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-radio-group
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
    >
      <el-radio v-for="item in options.options.items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'radioRender',
  components: {},
  props: {
    path: String,
    modelValue: String,
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
