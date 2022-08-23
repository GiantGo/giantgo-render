<template>
  <div v-if="!options.hidden" class="form-item" :style="{ width: options.width }">
    <component
      :is="component + '-render'"
      :items="items"
      :options="options"
      :model-value="modelValue"
      :path="path"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script>
const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'FormRenderItem',
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
