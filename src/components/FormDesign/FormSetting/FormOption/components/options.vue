<template>
  <div>
    <el-row class="option-row" v-for="(item, index) in data.items" :key="index" :gutter="5">
      <el-col :span="11">
        <el-input :model-value="item.label" @input="update(index, 'label', $event)" placeholder="名称" />
      </el-col>
      <el-col :span="11">
        <el-input :model-value="item.value" @input="update(index, 'value', $event)" placeholder="值" />
      </el-col>
      <el-col :span="2" class="btn-del">
        <i class="el-icon-delete" @click="removeOption(index)" />
      </el-col>
    </el-row>
    <el-button type="text" @click="addOption">增加选项</el-button>
    <el-button type="text" @click="editOptions">编辑选项</el-button>
    <el-dialog title="编辑选项" v-model="codeDialog" width="750px">
      <div class="json-box">
        <code-mirror v-model="code" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="codeDialog = false">取 消</el-button>
          <el-button type="primary" @click="setOptions">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { reactive, ref, watch, onMounted, nextTick } from 'vue'
import { deepClone } from '../../../../../utils'
import CodeMirror from '../../../../CodeMirror/index.vue'

export default {
  name: 'optionsOption',
  components: { CodeMirror },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const data = reactive({
      remote: false,
      items: []
    })
    const code = ref('')
    const codeDialog = ref(false)

    const setInternal = () => {
      data.remote = props.modelValue.remote
      data.items = deepClone(props.modelValue.items)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    const emitChange = () => {
      emit('update:modelValue', {
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
      nextTick(() => {
        code.value = JSON.stringify(data.items, null, '\t')
      })
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

    return {
      data,
      code,
      codeDialog,
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
