<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <quill-editor
      v-if="!options.hidden"
      :disabled="options.disabled"
      :options="{ placeholder: options.placeholder, readOnly: true }"
    />
  </el-form-item>
</template>

<script>
import quillEditor from '@/components/QuillEditor/index.vue'

export default {
  name: 'editorBuilder',
  components: { quillEditor },
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
