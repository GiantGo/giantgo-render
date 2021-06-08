<template>
  <el-form-item :label="options.label" :prop="path">
    <el-input type="textarea" v-model="value" :rows="options.rows" :placeholder="options.placeholder"></el-input>
  </el-form-item>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'textareaBuilder',
  components: {},
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
  setup() {
    const value = ref('')

    return {
      value
    }
  }
}
</script>

<style lang="scss" scoped></style>
