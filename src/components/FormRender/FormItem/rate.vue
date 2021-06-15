<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-rate
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
      :allow-half="options.allowHalf"
      :max="options.max"
    ></el-rate>
  </el-form-item>
</template>

<script>
export default {
  name: 'rateRender',
  components: {},
  props: {
    path: String,
    uuid: String,
    modelValue: Number,
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
