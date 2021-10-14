<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <quill-editor
      :value="modelValue"
      @change="$emit('update:modelValue', $event.html)"
      :disabled="options.disabled"
      :options="{ placeholder: options.placeholder, readOnly: false }"
      :style="{ height: options.height }"
    />
  </el-form-item>
</template>

<script>
import { ElFormItem } from 'element-plus'
import { QuillEditor } from '@giantgo-render/components'

export default {
  name: 'editorRender',
  components: { ElFormItem, QuillEditor },
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
