<template>
  <el-form-item label="组件宽度">
    <el-slider
      :model-value="parseInt(modelValue)"
      @update:modelValue="modelValue = $event + '%'"
      @change="$emit('update:modelValue', $event + '%')"
      :min="0"
      :max="100"
      :marks="{ 33: '1/3', 50: '1/2', 66: '2/3' }"
    ></el-slider>
  </el-form-item>
</template>

<script>
export default {
  name: 'widthOption',
  components: {},
  props: {
    modelValue: String
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
