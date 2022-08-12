<template>
  <label
    :style="{
      'line-height': options.lineHeight
    }"
  >
    {{ options.content }}
  </label>
</template>

<script>
export default {
  name: 'labelRender',
  components: {},
  props: {
    path: String,
    uuid: String,
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
