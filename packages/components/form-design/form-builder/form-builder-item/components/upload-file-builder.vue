<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      v-if="!options.hidden"
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :show-file-list="options.showFileList"
      :limit="options.limit"
      v-model:file-list="options.defaultValue"
      :disabled="options.disabled"
    >
      <el-button type="primary">
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
  name: 'uploadFileBuilder',
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
