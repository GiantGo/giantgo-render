<template>
  <el-form>
    <component :is="component" :options="options" :fields="fields"></component>
  </el-form>
</template>

<script>
export default {
  name: 'formItemOption',
  props: {
    component: {
      type: String,
      default: 'labelProperty'
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    fields: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
