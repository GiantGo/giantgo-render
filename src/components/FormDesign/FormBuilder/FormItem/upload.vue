<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      :action="options.action"
      :name="options.uploadName"
      :multiple="options.multiple"
      :limit="options.limit"
      :file-list="options.defaultValue"
      :disabled="options.disabled"
    >
      <el-button size="small" type="primary">
        {{ options.buttonText }}
      </el-button>
      <template #tip v-if="options.showToolTip">
        <div class="el-upload__tip">{{ options.tip }}</div>
      </template>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: 'uploadBuilder',
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
