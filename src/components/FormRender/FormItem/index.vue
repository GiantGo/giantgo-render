<template>
  <div class="form-item">
    <component
      :is="render"
      :uuid="uuid"
      :items="items"
      :options="options"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :path="options.key ? path + '.' + options.key : path"
    ></component>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'formItemRender',
  components: {},
  props: {
    path: String,
    render: String,
    uuid: String,
    modelValue: [String, Number, Boolean, Object, Array],
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

    return {}
  }
}
</script>

<style lang="scss" scoped></style>
