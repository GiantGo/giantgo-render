<template>
  <div v-html="options.richContent"></div>
</template>

<script>
export default {
  name: 'htmlBuilder',
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
