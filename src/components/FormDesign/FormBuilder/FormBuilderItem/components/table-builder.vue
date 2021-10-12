<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <object-builder :uuid="uuid" :items="items" :options="options" :path="path"></object-builder>
  </el-form-item>
</template>

<script>
import { ElFormItem } from 'element-plus'
import objectBuilder from './object-builder.vue'

export default {
  name: 'tableBuilder',
  components: { ElFormItem, objectBuilder },
  props: {
    path: String,
    uuid: String,
    items: {
      type: Array,
      default() {
        return []
      }
    },
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
