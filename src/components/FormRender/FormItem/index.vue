<template>
  <div class="form-item" :style="{ width: options.width }" v-if="!options.hidden">
    <component
      :is="component + '-render'"
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
    component: String,
    uuid: String,
    modelValue: [String, Number, Boolean, Date, Object, Array],
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
