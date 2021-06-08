<template>
  <form-item-render
    v-for="item in items"
    :key="item.uuid"
    :render="item.render"
    :uuid="item.uuid"
    :items="item.items"
    :options="item.options"
  ></form-item-render>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'objectRender',
  components: {},
  props: {
    path: String,
    uuid: String,
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
  setup() {
    return {}
  }
}
</script>

<style lang="scss"></style>
