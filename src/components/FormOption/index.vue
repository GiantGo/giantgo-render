<template>
  <el-form>
    <el-form-item label="标签宽度（px）:">
      <el-input v-model="options.labelWidth"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'formOption',
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
