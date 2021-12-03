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

<script>
import { ref, watch } from 'vue'
import { Signature } from '@giantgo-render/components'

export default {
  name: 'signatureBuilder',
  components: { Signature },
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
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

    return {
      signatureRef
    }
  }
}
</script>

<style lang="scss" scoped></style>
