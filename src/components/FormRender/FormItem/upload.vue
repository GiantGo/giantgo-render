<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-upload
      :action="options.action"
      :name="options.uploadName"
      :multiple="options.multiple"
      :limit="options.limit"
      :file-list="modelValue"
      :disabled="options.disabled"
      @on-change="onChange"
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
    const onChange = (file, fileList) => {
      emit('update:modelValue', fileList)
    }

    return {
      onChange
    }
  }
}
</script>

<style lang="scss" scoped></style>
