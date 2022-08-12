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
    ></Signature>
    <div class="btn-submit">
      <el-button type="primary" @click="undo">撤销</el-button>
    </div>
  </el-form-item>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { Signature } from '@giantgo-render/components'

export default {
  name: 'signatureRender',
  components: { Signature },
  props: {
    path: String,
    modelValue: String,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    const signatureRef = ref(null)

    const endStroke = () => {
      const { data } = signatureRef.value.saveSignature()
      emit('update:modelValue', data)
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

    return {
      signatureRef,
      endStroke,
      undo
    }
  }
}
</script>

<style lang="scss" scoped></style>
