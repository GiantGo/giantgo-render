<template>
  <el-card :shadow="options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-field :fields="fields" @update:fields="$emit('update:fields', $event)"></object-field>
  </el-card>
</template>

<script>
import ObjectField from './object.vue'

export default {
  name: 'cardField',
  components: { ObjectField },
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    },
    fields: {
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
