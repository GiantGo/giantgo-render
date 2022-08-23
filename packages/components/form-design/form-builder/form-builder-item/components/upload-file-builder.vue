<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      v-if="!options.hidden"
      :file-list="options.defaultValue"
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :show-file-list="options.showFileList"
      :limit="options.limit"
      :disabled="options.disabled"
    >
      <el-button type="primary">
        {{ options.buttonText }}
      </el-button>
      <template v-if="options.showToolTip" #tip>
        <div class="el-upload__tip">{{ options.tip }}</div>
      </template>
    </el-upload>
  </el-form-item>
</template>

<script setup>
defineOptions({
  name: 'uploadFileBuilder'
})
defineProps({
  path: String,
  uuid: String,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
</script>

<style lang="scss" scoped></style>
