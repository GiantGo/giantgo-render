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

<script setup>
import { onBeforeUnmount, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

defineOptions({
  name: 'richEditorBuilder'
})

defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const editorRef = shallowRef()

const handleCreated = (editor) => {
  editorRef.value = editor
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
</script>

<style lang="scss" scoped></style>
