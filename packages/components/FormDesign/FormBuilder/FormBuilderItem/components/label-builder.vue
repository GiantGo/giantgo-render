<template>
  <label>{{ options.content }}</label>
</template>

<script>
import { ElFormItem, ElInput } from 'element-plus'

export default {
  name: 'labelBuilder',
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
