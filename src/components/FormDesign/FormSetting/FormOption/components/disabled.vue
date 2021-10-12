<template>
  <el-checkbox :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)"> </el-checkbox>
</template>

<script>
export default {
  name: 'disabledOption',
  components: {},
  props: {
    modelValue: Boolean
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
