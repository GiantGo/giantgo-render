<template>
  <el-row class="option-row">
    <el-col :span="24"> 上：<el-input-number v-model="data.top" @input="emitChange" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 右：<el-input-number v-model="data.right" @input="emitChange" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 下：<el-input-number v-model="data.down" @input="emitChange" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 左：<el-input-number v-model="data.left" @input="emitChange" /> </el-col>
  </el-row>
</template>

<script setup>
import { reactive, onMounted, watch } from 'vue'

defineOptions({
  name: 'paddingOption'
})
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const data = reactive({
  top: 0,
  right: 0,
  down: 0,
  left: 0
})

const emitChange = () => {
  emit('update:modelValue', `${data.top || 0}px ${data.right || 0}px ${data.down || 0}px ${data.left || 0}px`)
}

const setInternal = () => {
  const [top, right, down, left] = props.modelValue.split(' ')
  data.top = parseFloat(top)
  data.right = parseFloat(right)
  data.down = parseFloat(down)
  data.left = parseFloat(left)
}

onMounted(setInternal)
watch(() => props.modelValue, setInternal)
</script>

<style lang="scss" scoped></style>
