<template>
  <el-form-item label="选项配置:">
    <el-row class="mt-10" v-for="(item, index) in data.items" :key="index" :gutter="5">
      <el-col :span="10">
        <el-input :model-value="item.label" @input="update(index, 'label', $event)" placeholder="名称" />
      </el-col>
      <el-col :span="10">
        <el-input :model-value="item.value" @input="update(index, 'value', $event)" placeholder="值" />
      </el-col>
      <el-col :span="4">
        <el-button type="danger" icon="el-icon-delete" circle @click="removeOption(index)"></el-button>
      </el-col>
    </el-row>
    <el-button type="text" @click="addOption">增加选项</el-button>
  </el-form-item>
</template>

<script>
import { reactive, watch, onMounted } from 'vue'
import { deepClone } from '@/utils/index.js'

export default {
  name: 'optionsOption',
  components: {},
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const data = reactive({
      remote: false,
      items: []
    })

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

    return {
      data,
      update,
      emitChange,
      addOption,
      removeOption
    }
  }
}
</script>

<style lang="scss" scoped></style>
