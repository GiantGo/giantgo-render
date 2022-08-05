<template>
  <div style="width: 100%">
    <el-tabs v-model="data.type" @tab-change="emitChange">
      <el-tab-pane label="静态数据" name="static">
        <el-row class="option-row" v-for="(item, index) in data.items" :key="index" :gutter="5">
          <el-col :span="11">
            <el-input :model-value="item.label" @input="update(index, 'label', $event)" placeholder="名称" />
          </el-col>
          <el-col :span="11">
            <el-input :model-value="item.value" @input="update(index, 'value', $event)" placeholder="值" />
          </el-col>
          <el-col :span="2" class="btn-del">
            <el-icon class="el-icon-delete" @click="removeOption(index)">
              <DeleteIcon />
            </el-icon>
          </el-col>
        </el-row>
        <el-button link type="primary" @click="addOption">增加选项</el-button>
        <el-button link type="primary" @click="editOptions">编辑选项</el-button>
        <el-dialog title="编辑选项" v-model="codeDialog" width="750px">
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
          clearable
          placeholder="请选择数据源"
          v-model="data.remote"
          @change="emitChange"
          style="width: 88%; margin-bottom: 5px"
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

<script>
import { ElRow, ElCol, ElButton, ElDialog, ElInput, ElMessage, ElIcon } from 'element-plus'
import DeleteIcon from '../../../../icons/delete.svg'
import { reactive, ref, watch, onMounted, inject } from 'vue'
import { deepClone } from '@giantgo-render/utils'
import { CodeEditor } from '@giantgo-render/components'

export default {
  name: 'optionsOption',
  components: { ElRow, ElCol, ElButton, ElDialog, ElInput, ElIcon, DeleteIcon, CodeEditor },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
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
        label: '选项' + index,
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
      data.items = deepClone(props.modelValue.items)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    return {
      data,
      code,
      codeDialog,
      state,
      update,
      emitChange,
      addOption,
      removeOption,
      editOptions,
      setOptions
    }
  }
}
</script>

<style lang="scss" scoped></style>
