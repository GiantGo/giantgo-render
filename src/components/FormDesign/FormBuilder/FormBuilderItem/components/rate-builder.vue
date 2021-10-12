<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-rate
      class="form-rate"
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :disabled="options.disabled"
      :allow-half="options.allowHalf"
      :max="options.max"
    ></el-rate>
  </el-form-item>
</template>

<script>
export default {
  name: 'rateBuilder',
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
