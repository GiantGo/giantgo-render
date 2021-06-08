<template>
  <el-form-item :label="options.label">
    <el-input-number v-model="value" :min="options.min" :max="options.max" label="描述文字"></el-input-number>
  </el-form-item>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'numberBuilder',
  components: {},
  props: {
    uuid: String,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {
    const value = ref(0)

    return {
      value
    }
  }
}
</script>

<style lang="scss" scoped></style>
