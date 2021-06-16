<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <quill-editor
      :value="modelValue"
      @change="$emit('update:modelValue', $event.html)"
      :disabled="options.disabled"
      :options="{ placeholder: options.placeholder, readOnly: false }"
    />
  </el-form-item>
</template>

<script>
import quillEditor from '@/components/QuillEditor/index.vue'

export default {
  name: 'editorRender',
  components: { quillEditor },
  props: {
    path: String,
    uuid: String,
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
