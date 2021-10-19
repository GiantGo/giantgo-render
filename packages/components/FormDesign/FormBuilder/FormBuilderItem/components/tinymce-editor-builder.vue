<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <tinymce-editor ref="tinymceRef" v-if="!options.hidden" :disabled="options.disabled" :height="options.height" />
  </el-form-item>
</template>

<script>
import { ref, watch } from 'vue'
import { ElFormItem } from 'element-plus'
import { TinymceEditor } from '@giantgo-render/components'

export default {
  name: 'tinymceEditorBuilder',
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
  setup(props) {
    const tinymceRef = ref(null)

    watch(
      () => props.options.defaultValue,
      (val) => {
        tinymceRef.value.setContent(val)
      }
    )

    return {
      tinymceRef
    }
  }
}
</script>

<style lang="scss" scoped></style>
