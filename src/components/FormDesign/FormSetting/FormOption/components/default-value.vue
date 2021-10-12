<template>
  <component
    :is="component + '-render'"
    :options="options"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  ></component>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: 'defaultValueOption',
  components: {},
  props: {
    modelValue: [String, Number, Boolean, Date, Object, Array]
  },
  setup() {
    const state = inject('state')

    return {
      component: computed(() => state.selected.component),
      options: computed(() =>
        Object.assign({}, state.selected.options, {
          label: '',
          clearable: true,
          disabled: false
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
