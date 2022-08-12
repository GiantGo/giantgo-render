<template>
  <el-card :shadow="options.shadow" :body-style="{ padding: options.padding }">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-builder :uuid="uuid" :items="items" :options="options" :path="path"></object-builder>
  </el-card>
</template>

<script>
import objectBuilder from './object-builder.vue'

export default {
  name: 'cardBuilder',
  components: { objectBuilder },
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
