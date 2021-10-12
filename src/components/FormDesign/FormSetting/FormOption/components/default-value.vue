<template>
  <form-render-item
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :component="component"
    :items="items"
    :options="options"
  ></form-render-item>
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
      items: computed(() => state.selected.items),
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
