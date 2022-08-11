<template>
  <label>{{ options.content }}</label>
</template>

<script>
export default {
  name: 'labelBuilder',
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
