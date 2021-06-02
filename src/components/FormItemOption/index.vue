<template>
  <el-form label-position="top">
    <component
      v-for="(value, key) in formItemOptions"
      :key="key"
      :is="key + 'Option'"
      :model-value="formItemOptions[key]"
      @update:modelValue="updateFormItemOption(key, $event)"
    >
    </component>
  </el-form>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formItemOption',
  props: {},
  setup() {
    const store = useStore()

    const updateFormItemOption = (key, value) => {
      store.dispatch('design/updateFormItemOption', { key, value })
    }

    return {
      formItemOptions: computed(() => store.getters.formItemOptions),
      updateFormItemOption
    }
  }
}
</script>

<style lang="scss" scoped></style>
