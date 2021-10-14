<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-rate
      class="form-rate"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
      :allow-half="options.allowHalf"
      :max="options.max"
    ></el-rate>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElRate } from 'element-plus'

export default {
  name: 'rateRender',
  components: { ElFormItem, ElRate },
  props: {
    path: String,
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
