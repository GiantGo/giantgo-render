<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="rich-editor-container">
      <Toolbar class="rich-editor-toolbar" :editor="editorRef" />
      <Editor
        class="rich-editor"
        :model-value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        :defaultConfig="{ placeholder: options.placeholder, readOnly: options.disabled }"
        @onCreated="handleCreated"
        :style="{ height: options.height, width: '100%' }"
      />
    </div>
  </el-form-item>
</template>

<script>
import { onBeforeUnmount, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElFormItem } from 'element-plus'

import '@wangeditor/editor/dist/css/style.css' // 引入 css

export default {
  name: 'richEditorRender',
  components: { ElFormItem, Editor, Toolbar },
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
  setup() {
    const editorRef = shallowRef()

    const handleCreated = (editor) => {
      editorRef.value = editor
    }

    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    return {
      editorRef,
      handleCreated
    }
  }
}
</script>

<style lang="scss" scoped></style>
