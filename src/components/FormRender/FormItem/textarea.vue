<template>
  <el-form-item :label="config.options.label" :prop="path">
    <el-input type="textarea" :rows="config.options.rows"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'textareaItem',
  components: {},
  props: {
    path: String,
    config: {
      type: Object,
      default() {
        return {
          uuid: '',
          component: '',
          options: {},
          items: []
        }
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
