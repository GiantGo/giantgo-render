<template>
  <el-divider></el-divider>
</template>

<script>
import { ElDivider } from 'element-plus'

export default {
  name: 'dividerBuilder',
  components: { ElDivider },
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
