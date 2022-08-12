<template>
  <el-dialog title="编辑额外参数" v-model="codeDialog" width="750px">
    <div class="form-design-code-editor">
      <code-editor v-model="code" lang="json" />
    </div>
    <template #footer>
      <div>
        <el-button @click="codeDialog = false">取消</el-button>
        <el-button type="primary" @click="setData">确定</el-button>
      </div>
    </template>
  </el-dialog>
  <el-button link type="primary" @click="editData">编辑数据</el-button>
</template>

<script>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { CodeEditor } from '@giantgo-render/components'

export default {
  name: 'uploadDataOption',
  components: { CodeEditor },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const code = ref('')
    const codeDialog = ref(false)

    const editData = () => {
      codeDialog.value = true
      code.value = JSON.stringify(props.modelValue, null, '\t')
    }

    const setData = () => {
      try {
        const modelValue = JSON.parse(code.value)
        emit('update:modelValue', modelValue)
      } catch (e) {
        return ElMessage.error('数据格式不正确')
      }
      codeDialog.value = false
    }

    return {
      code,
      codeDialog,
      editData,
      setData
    }
  }
}
</script>

<style lang="scss" scoped></style>
