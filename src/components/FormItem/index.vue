<template>
  <div class="form-item" @click.stop="select">
    <component
      :is="component"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :items="items"
      @update:items="$emit('update:items', $event)"
      :options="options"
    ></component>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'formItem',
  props: {
    component: {
      type: String,
      default: 'input-item'
    },
    uuid: String,
    modelValue: [String, Number, Boolean, Array, Object],
    items: {
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
      if (props.uuid) {
        store.dispatch('design/setSeleted', props.uuid)
      }
    }

    return {
      select
    }
  }
}
</script>

<style lang="scss" scoped></style>
