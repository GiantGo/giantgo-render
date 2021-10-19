<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <tinymce-editor
      ref="tinymceRef"
      :value="modelValue"
      @input="$emit('update:modelValue', $event)"
      :disabled="options.disabled"
      :readOnly="false"
      :height="options.height"
    />
  </el-form-item>
</template>

<script>
import { ElFormItem } from 'element-plus'
import { TinymceEditor } from '@giantgo-render/components'

export default {
  name: 'tinymceEditorRender',
  components: { ElFormItem, TinymceEditor },
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
  setup(props) {}
}
</script>

<style lang="scss" scoped></style>
