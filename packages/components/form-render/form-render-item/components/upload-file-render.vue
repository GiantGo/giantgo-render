<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      v-model:file-list="data.fileList"
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :data="options.uploadData"
      :headers="options.uploadHeaders"
      :show-file-list="options.showFileList"
      :limit="options.limit"
      :disabled="options.disabled"
      :before-upload="beforeUpload"
      :on-success="handleChange"
      :on-remove="handleChange"
      :on-error="handleError"
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
import { ElMessage } from 'element-plus'
import { onMounted, reactive, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

defineOptions({
  name: 'uploadFileRender'
})

const props = defineProps({
  path: String,
  modelValue: Array,
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const emit = defineEmits(['update:modelValue'])

const data = reactive({
  fileList: []
})

const beforeUpload = (file) => {
  const fileSuffix = props.options.fileSuffix
  const uploadSize = props.options.uploadSize
  const size = parseFloat(uploadSize)
  const unitMap = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }
  const unit = unitMap[uploadSize.substr(uploadSize.length - 2)]
  const isOverLimit = file.size / unit < size

  if (!isOverLimit) {
    ElMessage.error(`上传文件大小不能超过 ${uploadSize}!`)
    return false
  } else if (fileSuffix && fileSuffix.length && !fileSuffix.some((s) => file.type.indexOf(s) > -1)) {
    ElMessage.error(`请上传 ${fileSuffix.join('，')} 格式文件!`)
    return false
  }

  return true
}

const handleChange = (res, file, fileList) => {
  const files = []
  if (fileList && fileList.length) {
    fileList.forEach((item) => {
      files.push({
        name: item.name,
        ...item.response
      })
    })
  }
  emit('update:modelValue', files)
}

const handleError = () => {
  ElMessage.error(`上传失败!`)
}

const setInternal = () => {
  data.fileList = cloneDeep(props.modelValue)
}

onMounted(setInternal)
watch(() => props.modelValue, setInternal)
</script>

<style lang="scss" scoped></style>
