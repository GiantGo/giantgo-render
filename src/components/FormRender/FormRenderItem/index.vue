<template>
  <div class="form-item" :style="{ width: options.width }" v-if="!options.hidden">
    <component
      :is="component + '-render'"
      :items="items"
      :options="options"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :path="path"
    ></component>
  </div>
</template>

<script>
const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'formRenderItem',
  components: { ...components },
  props: {
    path: {
      type: String,
      default: ''
    },
    component: String,
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
