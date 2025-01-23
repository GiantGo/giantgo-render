<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      :file-list="options.defaultValue"
      list-type="picture-card"
      :action="options.uploadUrl"
      :name="options.uploadName"
      :multiple="options.multiple"
      :limit="options.limit"
      :disabled="options.disabled"
      :on-preview="handlePreview"
      :before-remove="beforeRemove"
    >
      <el-icon><i-carbon-add /></el-icon>
      <template v-if="options.showToolTip" #tip>
        <div class="el-upload__tip">{{ options.tip }}</div>
      </template>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
  </el-form-item>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

defineOptions({
  name: 'uploadImageBuilder'
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

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handlePreview = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url
  dialogVisible.value = true
}

const beforeRemove = () => {
  ElMessage.warning('请在字段设置的默认值移除！')
  return false
}
</script>

<style lang="scss" scoped></style>
