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
      <span v-html="'{{'"></span>
    </template>
    <template #suffix>
      <span v-html="'}}'"></span>
    </template>
  </el-autocomplete>
</template>

<script>
import { getInterpolation } from '@giantgo-render/utils'
import { ref } from 'vue'

export default {
  name: 'interpolation',
  components: {},
  props: {
    modelValue: String
  },
  setup() {
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

    return {
      getInterpolation,
      querySearch
    }
  }
}
</script>

<style lang="scss" scoped></style>
