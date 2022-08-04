<template>
  <el-dialog title="编辑请求头部" v-model="codeDialog" width="750px">
    <div class="form-design-json-box">
      <code-mirror v-model="code" />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="codeDialog = false">取消</el-button>
        <el-button type="primary" @click="setData">确定</el-button>
      </div>
    </template>
  </el-dialog>
  <el-button link type="primary" @click="editData">编辑数据</el-button>
</template>

<script>
import { ElDialog, ElButton, ElMessage } from 'element-plus'
import { ref, nextTick } from 'vue'
import { CodeMirror } from '@giantgo-render/components'

export default {
  name: 'uploadHeadersOption',
  components: { ElDialog, ElButton, CodeMirror },
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
