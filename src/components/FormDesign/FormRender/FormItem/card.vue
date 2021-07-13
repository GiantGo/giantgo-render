<template>
  <el-card class="form-card" :shadow="options.shadow" :body-style="{ padding: options.padding }">
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

<style lang="scss" scoped>
.form-card {
  margin-bottom: 22px;
}
</style>
