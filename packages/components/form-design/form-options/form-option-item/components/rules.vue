<template>
  <div>
    <el-row class="option-row" :gutter="5">
      <el-col :span="11">
        <el-checkbox v-model="data.required.required" @change="emitChange"> 必填 </el-checkbox>
      </el-col>
      <el-col :span="11">
        <el-input v-model="data.required.message" placeholder="提示信息" @input="emitChange" />
      </el-col>
      <el-col :span="2"/>
    </el-row>
    <el-row v-for="(rule, index) in data.patterns" :key="index" class="option-row" :gutter="5">
      <el-col :span="11">
        <el-input :model-value="rule.pattern" placeholder="正则表达式" @input="update(index, 'pattern', $event)" />
      </el-col>
      <el-col :span="11">
        <el-input :model-value="rule.message" placeholder="提示信息" @input="update(index, 'message', $event)" />
      </el-col>
      <el-col :span="2" class="btn-del">
        <el-icon class="el-icon-delete" @click="removeRule(index)">
          <i-carbon-trash-can />
        </el-icon>
      </el-col>
    </el-row>
    <el-button link type="primary" @click="addRule">增加验证</el-button>
    <el-button link type="primary" @click="editRules">编辑验证</el-button>
    <el-dialog v-model="codeDialog" title="编辑验证" width="750px">
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

<script setup>
import { ElMessage } from 'element-plus'
import { onMounted, reactive, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

defineOptions({
  name: 'rulesOption'
})
const props = defineProps({
  modelValue: Array
})
const emit = defineEmits(['update:modelValue'])
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
</script>

<style lang="scss" scoped></style>
