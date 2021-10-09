<template>
  <div class="form-item" :style="{ width: options.width }" v-if="!options.hidden">
    <component
      :is="component + '-render'"
      :uuid="uuid"
      :items="items"
      :options="options"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :path="path"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'formItemRender',
  components: {},
  props: {
    path: {
      type: String,
      default: ''
    },
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
