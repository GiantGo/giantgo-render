<template>
  <el-form-item label="验证:">
    <el-row :gutter="5">
      <el-col :span="10">
        <el-checkbox v-model="data.required.required" @change="emitChange"> 必填 </el-checkbox>
      </el-col>
      <el-col :span="10">
        <el-input v-model="data.required.message" @input="emitChange" placeholder="提示信息" />
      </el-col>
      <el-col :span="4"> </el-col>
    </el-row>
    <el-row class="mt-10" v-for="(rule, index) in data.patterns" :key="index" :gutter="5">
      <el-col :span="10">
        <el-input :model-value="rule.pattern" @input="update(index, 'pattern', $event)" placeholder="正则表达式" />
      </el-col>
      <el-col :span="10">
        <el-input :model-value="rule.message" @input="update(index, 'message', $event)" placeholder="提示信息" />
      </el-col>
      <el-col :span="4">
        <el-button type="danger" icon="el-icon-delete" circle @click="removeRule(index)"></el-button>
      </el-col>
    </el-row>
    <el-button type="text" @click="addRule">增加验证</el-button>
  </el-form-item>
</template>

<script>
import { reactive, watch } from 'vue'

export default {
  name: 'rulesOption',
  components: {},
  props: {
    modelValue: Array
  },
  setup(props, { emit }) {
    const data = reactive({
      required: { required: false, message: '必填项', trigger: 'blur' },
      patterns: []
    })

    watch(
      () => props.modelValue,
      (modelValue) => {
        data.required = { ...modelValue[0] }
        data.patterns = [...modelValue.slice(1)]
      },
      { deep: true }
    )

    const emitChange = () => {
      emit('update:modelValue', [data.required, ...data.patterns])
    }

    const update = (index, key, value) => {
      data.patterns[index][key] = value
      emitChange()
    }

    const addRule = () => {
      data.patterns.push({
        message: '',
        pattern: '',
        trigger: 'blur'
      })
      emitChange()
    }

    const removeRule = (index) => {
      data.patterns.splice(index, 1)
      emitChange()
    }

    return {
      data,
      update,
      emitChange,
      addRule,
      removeRule
    }
  }
}
</script>

<style lang="scss" scoped></style>
