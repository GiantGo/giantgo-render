<template>
  <el-form-item :label="options.label">
    <el-input type="textarea" :rows="options.rows"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'textareaItem',
  components: {},
  props: {
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
