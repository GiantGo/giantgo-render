<template>
  <div>
    <component :is="render" :uuid="uuid" :items="items" :options="options"></component>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'formItemRender',
  components: {},
  props: {
    render: String,
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
  setup(props) {
    const store = useStore()

    return {}
  }
}
</script>

<style lang="scss" scoped></style>
