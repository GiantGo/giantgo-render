<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <Signature
      ref="signatureRef"
      :disabled="options.disabled"
      :width="options.width"
      :height="options.height"
      :options="{
        penColor: options.penColor,
        backgroundColor: options.backgroundColor
      }"
    ></Signature>
  </el-form-item>
</template>

<script setup>
import { ref, watch } from 'vue'

defineOptions({
  name: 'signatureBuilder'
})
const props = defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const signatureRef = ref(null)

watch(
  () => props.options.defaultValue,
  (value) => {
    if (value) {
      signatureRef.value.fromDataURL(value)
    } else {
      signatureRef.value.clearSignature()
    }
  }
)
</script>

<style lang="scss" scoped></style>
