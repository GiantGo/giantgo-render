<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-input
      v-if="!options.hidden"
      type="textarea"
      :model-value="options.defaultValue"
      :rows="options.rows"
      :placeholder="options.placeholder"
      :disabled="options.disabled"
      :maxlength="options.maxlength"
      :show-word-limit="options.showWordLimit"
    ></el-input>
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
