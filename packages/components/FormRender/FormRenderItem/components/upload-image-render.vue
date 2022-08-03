<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      list-type="picture-card"
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :data="options.uploadData"
      :headers="options.uploadHeaders"
      :limit="options.limit"
      v-model:file-list="data.fileList"
      :disabled="options.disabled"
      :before-upload="beforeUpload"
      :on-success="handleChange"
      :on-remove="handleChange"
      :on-error="handleError"
      :on-preview="handlePreview"
    >
      <el-icon><PlusIcon /></el-icon>
      <template #tip v-if="options.showToolTip">
        <div class="el-upload__tip">{{ options.tip }}</div>
      </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </el-form-item>
</template>

<script>
import { ElFormItem, ElUpload, ElMessage } from 'element-plus'
import { ref, reactive, watch, onMounted } from 'vue'
import { deepClone } from '@giantgo-render/utils'
import PlusIcon from '../../../icons/plus.svg'

export default {
  name: 'uploadImageRender',
  components: { ElFormItem, ElUpload, PlusIcon },
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

    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)

    const beforeUpload = (file) => {
      const imageSuffix = props.options.imageSuffix
      const uploadSize = props.options.uploadSize
      const size = parseFloat(uploadSize)
      const unitMap = { KB: 1024, MB: 1024 * 1024, GB: 1024 * 1024 * 1024 }
      const unit = unitMap[uploadSize.substr(uploadSize.length - 2)]
      const isOverLimit = file.size / unit < size

      if (!isOverLimit) {
        ElMessage.error(`上传图片大小不能超过 ${uploadSize}!`)
        return false
      } else if (imageSuffix && imageSuffix.length && !imageSuffix.some((s) => file.type.indexOf(s) > -1)) {
        ElMessage.error(`请上传 ${imageSuffix.join('，')} 格式图片!`)
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

    const handlePreview = (uploadFile) => {
      dialogImageUrl.value = uploadFile.url
      dialogVisible.value = true
    }

    const setInternal = () => {
      data.fileList = deepClone(props.modelValue)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    return {
      data,
      dialogImageUrl,
      dialogVisible,
      beforeUpload,
      handleChange,
      handleError,
      handlePreview
    }
  }
}
</script>

<style lang="scss" scoped></style>
