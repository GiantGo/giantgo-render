<template>
  <div style="width: 100%">
    <el-tabs v-model="data.type" @tab-change="emitChange">
      <el-tab-pane label="静态数据" name="static">
        <el-row v-for="(item, index) in data.items" :key="index" class="option-row" :gutter="5">
          <el-col :span="11">
            <el-input :model-value="item.label" placeholder="标题" @input="update(index, 'label', $event)" />
          </el-col>
          <el-col :span="11">
            <el-input :model-value="item.value" placeholder="值" @input="update(index, 'value', $event)" />
          </el-col>
          <el-col :span="2" class="btn-del">
            <el-icon class="el-icon-delete" @click="removeOption(index)">
              <i-carbon-trash-can />
            </el-icon>
          </el-col>
        </el-row>
        <el-button link type="primary" @click="addOption">增加选项</el-button>
        <el-button link type="primary" @click="editOptions">编辑选项</el-button>
        <el-dialog v-model="codeDialog" title="编辑选项" width="750px">
          <div class="form-design-code-editor">
            <code-editor v-model="code" lang="json" />
          </div>
          <template #footer>
            <div>
              <el-button @click="codeDialog = false">取消</el-button>
              <el-button type="primary" @click="setOptions">确定</el-button>
            </div>
          </template>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="数据源" name="remote">
        <el-select
          v-model="data.remote"
          clearable
          placeholder="请选择数据源"
          style="width: 88%; margin-bottom: 5px"
          @change="emitChange"
        >
          <el-option
            v-for="(value, uuid) in state.formDesign.options.remotes"
            :key="uuid"
            :label="value.title"
            :value="uuid"
          />
        </el-select>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { inject, onMounted, reactive, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

defineOptions({
  name: 'optionsOption'
})

const props = defineProps({
  modelValue: Object
})

const emit = defineEmits(['update:modelValue'])

const data = reactive({
  type: 'static',
  remote: '',
  items: []
})
const code = ref('')
const codeDialog = ref(false)
const state = inject('state')

const emitChange = () => {
  emit('update:modelValue', {
    type: data.type,
    remote: data.remote,
    items: data.items
  })
}

const update = (index, key, value) => {
  data.items[index][key] = value
  emitChange()
}

const addOption = () => {
  const index = String(data.items.length + 1)
  data.items.push({
    label: `选项${index}`,
    value: index
  })
  emitChange()
}

const removeOption = (index) => {
  data.items.splice(index, 1)
  emitChange()
}

const editOptions = () => {
  codeDialog.value = true
  code.value = JSON.stringify(data.items, null, '\t')
}

const setOptions = () => {
  try {
    data.items = JSON.parse(code.value)
  } catch (e) {
    return ElMessage.error('数据格式不正确')
  }
  codeDialog.value = false
  emitChange()
}

const setInternal = () => {
  data.type = props.modelValue.type
  data.remote = props.modelValue.remote
  data.items = cloneDeep(props.modelValue.items)
}

onMounted(setInternal)
watch(() => props.modelValue, setInternal)
</script>

<style lang="scss" scoped></style>
