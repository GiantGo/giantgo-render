<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="rich-editor-container">
      <Toolbar class="rich-editor-toolbar" :editor="editorRef" />
      <Editor
        class="rich-editor"
        :model-value="modelValue"
        :default-config="{ placeholder: options.placeholder, readOnly: options.disabled }"
        :style="{ height: options.height, width: '100%' }"
        @update:modelValue="$emit('update:modelValue', $event)"
        @onCreated="handleCreated"
      />
    </div>
  </el-form-item>
</template>

<script setup>
import { onBeforeUnmount, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'

defineOptions({
  name: 'richEditorRender'
})

defineProps({
  path: String,
  modelValue: String,
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
