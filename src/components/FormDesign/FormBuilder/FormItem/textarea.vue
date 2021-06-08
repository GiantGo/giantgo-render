<template>
  <el-form-item :label="options.label" :prop="path">
    <el-input type="textarea" v-model="value" :rows="options.rows"></el-input>
  </el-form-item>
</template>

<script>
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
