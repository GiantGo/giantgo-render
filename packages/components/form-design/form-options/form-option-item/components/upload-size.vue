<template>
  <el-input v-model.number="size" type="text" @input="update">
    <template #append>
      <el-select v-model="unit" :style="{ width: '70px' }" @change="update">
        <el-option label="KB" value="KB" />
        <el-option label="MB" value="MB" />
        <el-option label="GB" value="GB" />
      </el-select>
    </template>
  </el-input>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'uploadSizeOption'
})
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const size = ref(0)
const unit = ref('KB')

const setInternal = () => {
  size.value = parseFloat(props.modelValue)
  unit.value = props.modelValue.substr(props.modelValue.length - 2)
}

const update = () => {
  emit('update:modelValue', size.value + unit.value)
}

watch(() => props.modelValue, setInternal)
onMounted(setInternal)
</script>

<style lang="scss" scoped></style>
