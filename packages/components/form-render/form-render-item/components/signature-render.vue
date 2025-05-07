<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <Signature
      ref="signatureRef"
      :disabled="options.disabled"
      :width="options.width"
      :height="options.height"
      :options="{
        penColor: options.penColor,
        backgroundColor: options.backgroundColor,
        endStroke
      }"
    />
    <div class="btn-submit">
      <el-button type="primary" @click="undo">撤销</el-button>
    </div>
  </el-form-item>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'

defineOptions({
  name: 'signatureRender'
})

const props = defineProps({
  path: String,
  modelValue: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const emit = defineEmits(['update:modelValue'])
const signatureRef = ref(null)

const endStroke = () => {
  const { data } = signatureRef.value.saveSignature()
  emit('update:modelValue', data || '')
}

const undo = () => {
  signatureRef.value.undoSignature()
  endStroke()
}

const setInternal = () => {
  if (props.modelValue) {
    signatureRef.value.fromDataURL(props.modelValue)
  } else {
    signatureRef.value.clearSignature()
  }
}

watch(() => props.modelValue, setInternal)
onMounted(setInternal)
</script>

<style lang="scss" scoped></style>
