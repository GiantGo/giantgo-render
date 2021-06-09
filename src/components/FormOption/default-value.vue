<template>
  <component
    :is="selected.render"
    :options="options"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  ></component>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'defaultValueOption',
  components: {},
  props: {
    modelValue: [String, Number, Boolean, Object, Array],
    selected: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    return {
      options: computed(() => Object.assign({}, props.selected.options, { label: '默认值' }))
    }
  }
}
</script>

<style lang="scss" scoped></style>
