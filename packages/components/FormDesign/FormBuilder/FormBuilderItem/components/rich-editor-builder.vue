<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="rich-editor-container" v-if="!options.hidden">
      <Toolbar class="rich-editor-toolbar" :editor="editorRef" />
      <Editor
        class="rich-editor"
        :defaultConfig="{ placeholder: options.placeholder, readOnly: true }"
        @onCreated="handleCreated"
        :style="{ height: options.height, width: '100%' }"
      />
    </div>
  </el-form-item>
</template>

<script>
import { onBeforeUnmount, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElFormItem } from 'element-plus'

import '@wangeditor/editor/dist/css/style.css' // 引入 css

export default {
  name: 'richEditorBuilder',
  components: { ElFormItem, Editor, Toolbar },
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
