<template>
  <component
    v-if="!hasOwn(selected, 'items')"
    :is="selected.component + '-render'"
    :options="options"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  ></component>
</template>

<script>
import { computed } from 'vue'
import { hasOwn } from '@/utils'

export default {
  name: 'defaultValueOption',
  components: {},
  props: {
    modelValue: [String, Number, Boolean, Date, Object, Array],
    selected: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    return {
      hasOwn,
      options: computed(() =>
        Object.assign({}, props.selected.options, {
          label: '默认值:',
          clearable: true,
          disabled: false
        })
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
