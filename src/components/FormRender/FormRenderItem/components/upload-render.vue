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
      :file-list="data.fileList"
      :disabled="options.disabled"
      :before-upload="beforeUpload"
      :on-success="handleChange"
      :on-remove="handleChange"
      :before-remove="beforeRemove"
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
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, watch, onMounted } from 'vue'
import { deepClone } from '../../../../utils'

export default {
  name: 'uploadRender',
  components: {},
  props: {
    path: String,
    modelValue: Array,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props, { emit }) {
    const data = reactive({
      fileList: []
    })

    const setInternal = () => {
      data.fileList = deepClone(props.modelValue)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

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

    const handleChange = (file, fileList) => {
      const files = []
      fileList.forEach((item) => {
        files.push({
          name: item.name,
          ...item.response
        })
      })
      emit('update:modelValue', files)
    }

    const beforeRemove = (file, fileList) => {
      return ElMessageBox.confirm(`确定移除 ${file.name}？`)
    }

    const handleError = () => {
      ElMessage.error(`上传失败!`)
    }

    return {
      data,
      beforeUpload,
      handleChange,
      beforeRemove,
      handleError
    }
  }
}
</script>

<style lang="scss" scoped></style>
