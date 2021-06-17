<template>
  <el-form label-position="top">
    <component
      v-for="(value, key) in selected.options"
      :key="key"
      :is="key + 'Option'"
      :model-value="selected.options[key]"
      @update:modelValue="updateOption(key, $event)"
      :selected="selected"
    >
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
