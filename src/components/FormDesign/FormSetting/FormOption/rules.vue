<template>
  <el-form-item label="验证" label-width="50px">
    <el-row :gutter="5">
      <el-col :span="11" class="text-center">
        <el-checkbox v-model="data.required.required" @change="emitChange"> 必填 </el-checkbox>
      </el-col>
      <el-col :span="11">
        <el-input v-model="data.required.message" @input="emitChange" placeholder="提示信息" />
      </el-col>
      <el-col :span="2"> </el-col>
    </el-row>
    <el-row class="rule-row" v-for="(rule, index) in data.patterns" :key="index" :gutter="5">
      <el-col :span="11">
        <el-input :model-value="rule.pattern" @input="update(index, 'pattern', $event)" placeholder="正则表达式" />
      </el-col>
      <el-col :span="11">
        <el-input :model-value="rule.message" @input="update(index, 'message', $event)" placeholder="提示信息" />
      </el-col>
      <el-col :span="2" class="text-center">
        <i class="el-icon-delete" @click="removeRule(index)" />
      </el-col>
    </el-row>
    <el-button type="text" @click="addRule">增加验证</el-button>
    <el-button type="text" @click="editRules">编辑验证</el-button>
    <el-dialog title="编辑验证" v-model="codeDialog" width="750px">
      <div class="json-box">
        <code-mirror v-model="code" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="codeDialog = false">取 消</el-button>
          <el-button type="primary" @click="setRules">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </el-form-item>
</template>

<script>
import { ElMessage } from 'element-plus'
import { reactive, ref, watch, onMounted, nextTick } from 'vue'
import { deepClone } from '@/utils/index.js'
import CodeMirror from '@/components/CodeMirror/index.vue'

export default {
  name: 'rulesOption',
  components: { CodeMirror },
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

    const setInternal = () => {
      data.required = deepClone(props.modelValue[0])
      data.patterns = deepClone(props.modelValue.slice(1))
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

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
      nextTick(() => {
        code.value = JSON.stringify(data.patterns, null, '\t')
      })
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

<style lang="scss" scoped>
@import '../../../../styles/variables.scss';

.rule-row {
  margin-top: 5px;
}

.el-icon-delete {
  cursor: pointer;
  color: $danger-color;
  font-weight: bold;
}
</style>
