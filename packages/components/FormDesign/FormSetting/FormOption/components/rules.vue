<template>
  <div>
    <el-row class="option-row" :gutter="5">
      <el-col :span="11">
        <el-checkbox v-model="data.required.required" @change="emitChange"> 必填 </el-checkbox>
      </el-col>
      <el-col :span="11">
        <el-input v-model="data.required.message" @input="emitChange" placeholder="提示信息" />
      </el-col>
      <el-col :span="2"> </el-col>
    </el-row>
    <el-row class="option-row" v-for="(rule, index) in data.patterns" :key="index" :gutter="5">
      <el-col :span="11">
        <el-input :model-value="rule.pattern" @input="update(index, 'pattern', $event)" placeholder="正则表达式" />
      </el-col>
      <el-col :span="11">
        <el-input :model-value="rule.message" @input="update(index, 'message', $event)" placeholder="提示信息" />
      </el-col>
      <el-col :span="2" class="btn-del">
        <el-icon class="el-icon-delete" @click="removeRule(index)">
          <i-carbon-trash-can />
        </el-icon>
      </el-col>
    </el-row>
    <el-button link type="primary" @click="addRule">增加验证</el-button>
    <el-button link type="primary" @click="editRules">编辑验证</el-button>
    <el-dialog title="编辑验证" v-model="codeDialog" width="750px">
      <div class="form-design-code-editor">
        <code-editor v-model="code" lang="json" />
      </div>
      <template #footer>
        <div>
          <el-button @click="codeDialog = false">取消</el-button>
          <el-button type="primary" @click="setRules">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ElRow, ElCol, ElCheckbox, ElInput, ElButton, ElDialog, ElMessage, ElIcon } from 'element-plus'
import { reactive, ref, watch, onMounted } from 'vue'
import { cloneDeep } from 'lodash'
import { CodeEditor } from '@giantgo-render/components'

export default {
  name: 'rulesOption',
  components: { ElRow, ElCol, ElCheckbox, ElInput, ElButton, ElDialog, ElIcon, CodeEditor },
  props: {
    modelValue: Array
  },
  setup(props, { emit }) {
    const data = reactive({
      required: { required: false, message: '必填项', trigger: 'blur' },
      patterns: []
    })
    const code = ref('')
    const codeDialog = ref(false)

    const emitChange = () => {
      emit('update:modelValue', [data.required, ...data.patterns])
    }

    const update = (index, key, value) => {
      data.patterns[index][key] = value
      emitChange()
    }

    const addRule = () => {
      data.patterns.push({
        pattern: '',
        message: '',
        trigger: 'blur'
      })
      emitChange()
    }

    const removeRule = (index) => {
      data.patterns.splice(index, 1)
      emitChange()
    }

    const editRules = () => {
      codeDialog.value = true
      code.value = JSON.stringify(data.patterns, null, '\t')
    }

    const setRules = () => {
      try {
        data.patterns = JSON.parse(code.value)
      } catch (e) {
        return ElMessage.error('数据格式不正确')
      }
      codeDialog.value = false
      emitChange()
    }

    const setInternal = () => {
      data.required = cloneDeep(props.modelValue[0])
      data.patterns = cloneDeep(props.modelValue.slice(1))
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    return {
      data,
      code,
      codeDialog,
      update,
      emitChange,
      addRule,
      removeRule,
      editRules,
      setRules
    }
  }
}
</script>

<style lang="scss" scoped></style>
