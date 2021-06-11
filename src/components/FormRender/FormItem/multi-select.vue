<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-select
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :multiple="true"
      :collapse-tags="options.collapseTags"
      :multiple-limit="options.multipleLimit"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :filterable="options.filterable"
      :placeholder="options.placeholder"
      :no-data-text="options.noDataText"
      :no-match-text="options.noMatchText"
    >
      <el-option v-for="item in options.options.items" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'multiSelectRender',
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
