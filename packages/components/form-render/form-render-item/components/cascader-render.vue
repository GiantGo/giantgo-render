<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :options="items"
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
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

export default {
  name: 'cascaderRender',
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
  setup(props) {
    const state = inject('state')
    const { items } = useOptions(props, state.formDesign)

    return {
      items
    }
  }
}
</script>

<style lang="scss" scoped></style>
