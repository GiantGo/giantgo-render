<template>
  <el-form label-position="top">
    <component
      v-for="(value, key) in selected.options"
      :key="key"
      :is="key + 'Option'"
      :model-value="selected.options[key]"
      @update:modelValue="updateFormOption(key, $event)"
      :selected="selected"
    >
    </component>
  </el-form>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formOption',
  props: {},
  setup() {
    const store = useStore()

    const updateFormOption = (key, value) => {
      store.dispatch('design/updateFormOption', { key, value })
    }

    return {
      selected: computed(() => store.getters.selected),
      updateFormOption
    }
  }
}
</script>

<style lang="scss" scoped></style>
