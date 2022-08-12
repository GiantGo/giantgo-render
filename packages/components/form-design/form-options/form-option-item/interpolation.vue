<template>
  <el-autocomplete
    popper-class="form-setting-interpolation"
    :model-value="getInterpolation(modelValue).trim()"
    @input="$emit('update:modelValue', $event.trim() ? `{{${$event.trim()}}}` : '{{  }}')"
    :fetch-suggestions="querySearch"
    placeholder="请输入JS表达式"
  >
    <template #default="{ item }">
      <div class="value">{{ item.value }}</div>
      <span class="label">{{ item.label }}</span>
    </template>
    <template #prefix>
      <span>&#123;&#123;</span>
    </template>
    <template #suffix>
      <span>&#125;&#125;</span>
    </template>
  </el-autocomplete>
</template>

<script setup>
import { getInterpolation } from '@giantgo-render/utils'
import { ref } from 'vue'

defineOptions({
  name: 'interpolation'
})

defineProps({
  modelValue: String
})

const tips = ref([
  { value: 'root', label: '整个表单的值' },
  { value: 'options', label: '该组件的选项' }
])
const querySearch = (queryString, cb) => {
  const results = queryString
    ? tips.value.filter((tip) => tip.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    : tips.value
  cb(results)
}
</script>

<style lang="scss" scoped></style>
