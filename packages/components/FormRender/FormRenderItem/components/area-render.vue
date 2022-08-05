<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :options="region"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
    ></el-cascader>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElCascader } from 'element-plus'
import { reactive } from 'vue'
import { areaTree } from '@giantgo-render/utils'

export default {
  name: 'areaRender',
  components: { ElFormItem, ElCascader },
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
  setup() {
    const region = reactive(areaTree)

    return {
      region
    }
  }
}
</script>

<style lang="scss" scoped></style>
