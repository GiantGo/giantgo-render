<template>
  <component
    :is="component"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :fields="fields"
    @update:fields="$emit('update:fields', $event)"
    :options="options"
    @click.prevent="select"
  ></component>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'formItem',
  props: {
    component: {
      type: String,
      default: 'input-field'
    },
    modelValue: [String, Number, Boolean, Array, Object],
    fields: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const store = useStore()

    const select = () => {
      store.dispatch('design/setSeleted', props.options.uuid)
    }

    return {
      select
    }
  }
}
</script>

<style lang="scss" scoped></style>
