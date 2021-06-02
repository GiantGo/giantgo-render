<template>
  <el-form label-position="top">
    <component
      v-for="(value, key) in formOptions"
      :key="key"
      :is="key + 'FormOption'"
      :model-value="formOptions[key]"
      @update:modelValue="updateFormOption(key, $event)"
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
      formOptions: computed(() => store.getters.formOptions),
      updateFormOption
    }
  }
}
</script>

<style lang="scss" scoped></style>
