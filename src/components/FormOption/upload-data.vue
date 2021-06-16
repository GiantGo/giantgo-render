<template>
  <el-form-item label="上传额外参数:">
    <el-row class="mt-10" v-for="(item, index) in data.items" :key="index" :gutter="5">
      <el-col :span="10">
        <el-input :model-value="item.key" @input="update(index, 'key', $event)" placeholder="键" />
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
import { reactive, watch, onMounted, toRaw } from 'vue'
import { deepClone } from '@/utils/index.js'

export default {
  name: 'uploadDataOption',
  components: {},
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const data = reactive({
      items: []
    })

    const setInternal = () => {
      const options = deepClone(toRaw(props.modelValue))
      const items = []

      for (let key in options) {
        items.push({ key, value: options[key] })
      }
      data.items = items
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    const emitChange = () => {
      const result = {}

      data.items.forEach(({ key, value }) => {
        result[key] = value
      })

      emit('update:modelValue', result)
    }

    const update = (index, key, value) => {
      data.items[index][key] = value
      emitChange()
    }

    const addOption = () => {
      data.items.push({
        key: '',
        value: ''
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
