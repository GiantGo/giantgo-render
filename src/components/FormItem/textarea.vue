<template>
  <el-input type="textarea" :rows="options.rows"></el-input>
</template>

<script>
export default {
  name: 'textareaField',
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
