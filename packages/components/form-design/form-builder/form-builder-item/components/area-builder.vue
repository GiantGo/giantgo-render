<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-cascader
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :options="region"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :clearable="options.clearable"
      :props="{
        expandTrigger: options.expandTrigger
      }"
    ></el-cascader>
  </el-form-item>
</template>

<script setup>
import { reactive } from 'vue'
import { areaTree } from '@giantgo-render/utils'

defineOptions({
  name: 'areaBuilder'
})

defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const region = reactive(areaTree)
</script>

<style lang="scss" scoped></style>
