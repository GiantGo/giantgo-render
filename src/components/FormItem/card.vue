<template>
  <el-card :shadow="options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-item :items="items" @update:items="$emit('update:items', $event)"></object-item>
  </el-card>
</template>

<script>
import ObjectItem from './object.vue'

export default {
  name: 'cardItem',
  components: { ObjectItem },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
