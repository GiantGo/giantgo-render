<template>
  <el-form-item :label="options.label">
    <el-input type="text"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'inputItem',
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
