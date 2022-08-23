<template>
  <el-card class="form-card" :shadow="options.shadow" :body-style="{ padding: options.padding }">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-render
      :items="items"
      :options="options"
      :path="path"
      :model-value="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </el-card>
</template>

<script setup>
defineOptions({
  name: 'cardRender'
})

defineProps({
  path: String,
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
})
</script>

<style lang="scss" scoped></style>
