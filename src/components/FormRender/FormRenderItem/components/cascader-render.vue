<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      v-if="!options.hidden"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :options="options.options.items"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
    ></el-cascader>
  </el-form-item>
</template>

<script>
export default {
  name: 'cascaderRender',
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
