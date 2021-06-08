<template>
  <el-card :shadow="options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-builder :uuid="uuid" :items="items" :options="options" :path="path"></object-builder>
  </el-card>
</template>

<script>
export default {
  name: 'cardBuilder',
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
