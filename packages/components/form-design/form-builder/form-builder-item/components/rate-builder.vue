<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-rate
      class="form-rate"
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :allow-half="options.allowHalf"
      :max="options.max"
    />
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'rateBuilder'
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
</script>

<style lang="scss" scoped></style>
