<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <quill-editor
      v-if="!options.hidden"
      :disabled="options.disabled"
      :options="{ placeholder: options.placeholder }"
      :style="{ height: options.height, width: '100%' }"
    />
  </el-form-item>
</template>

<script>
import { QuillEditor } from '@giantgo-render/components'
import { ElFormItem } from 'element-plus'

export default {
  name: 'quillEditorBuilder',
  components: { ElFormItem, QuillEditor },
  props: {
    path: String,
    uuid: String,
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
