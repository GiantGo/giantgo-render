<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :data="options.uploadData"
      :headers="options.uploadHeaders"
      :show-file-list="options.showFileList"
      :limit="options.limit"
      :file-list="modelValue"
      :disabled="options.disabled"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-error="handleError"
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
import { ElMessage } from 'element-plus'

export default {
  name: 'uploadRender',
  components: {},
  props: {
    path: String,
    uuid: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    const beforeUpload = (file) => {
      const uploadSize = props.options.uploadSize
      const size = parseFloat(uploadSize)
      const unitMap = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }
      const unit = unitMap[uploadSize.substr(uploadSize.length - 2)]
      const isOverLimit = file.size / unit < size

      if (!isOverLimit) {
        ElMessage.error(`上传文件大小不能超过 ${uploadSize}!`)
      }

      return isOverLimit
    }

    const handleSuccess = (response, file, fileList) => {
      emit(
        'update:modelValue',
        fileList.map((item) => {
          return {
            name: item.name,
            ...item.response
          }
        })
      )
    }

    const handleError = () => {
      ElMessage.error(`上传失败!`)
    }

    return {
      handleSuccess,
      beforeUpload,
      handleError
    }
  }
}
</script>

<style lang="scss" scoped></style>
