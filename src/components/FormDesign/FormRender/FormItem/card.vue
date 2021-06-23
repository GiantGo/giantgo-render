<template>
  <el-card :shadow="options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-render
      :uuid="uuid"
      :items="items"
      :options="options"
      :path="path"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    ></object-render>
  </el-card>
</template>

<script>
export default {
  name: 'cardRender',
  props: {
    path: String,
    uuid: String,
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
  setup() {}
}
</script>

<style lang="scss" scoped></style>
