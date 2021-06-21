<template>
  <el-form label-position="top" :key="selected.uuid">
    <component
      v-for="(value, key) in selected.options"
      :key="key"
      :is="key + 'Option'"
      :model-value="selected.options[key]"
      @update:modelValue="updateOption(key, $event)"
      :selected="selected"
    >
      阿萨德
    </component>
  </el-form>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'formOption',
  props: {},
  setup() {
    const state = inject('state')
    const updateFormOption = inject('updateFormOption')

    return {
      selected: computed(() => state.selected),
      updateOption: (key, value) => updateFormOption({ key, value })
    }
  }
}
</script>

<style lang="scss" scoped></style>
