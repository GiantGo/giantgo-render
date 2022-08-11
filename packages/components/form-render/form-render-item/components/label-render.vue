<template>
  <label
    :style="{
      'line-height': options.lineHeight
    }"
  >
    {{ options.content }}
  </label>
</template>

<script>
import { ElFormItem, ElInput } from 'element-plus'

export default {
  name: 'labelRender',
  components: { ElFormItem, ElInput },
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
