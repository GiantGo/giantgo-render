<template>
  <div class="form-item-list">
    <form-item-render
      v-for="item in items"
      :key="item.uuid"
      :model-value="modelValue[item.options.key]"
      @update:modelValue="update(item.options.key, $event)"
      :component="item.component"
      :uuid="item.uuid"
      :items="item.items"
      :options="item.options"
      :path="path"
    ></form-item-render>
  </div>
</template>

<script>
export default {
  name: 'objectRender',
  components: {},
  props: {
    path: String,
    modelValue: Object,
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
  setup(props, { emit }) {
    const update = (key, value) => {
      emit('update:modelValue', Object.assign({}, props.modelValue, { [key]: value }))
    }
    return {
      update
    }
  }
}
</script>

<style lang="scss"></style>
