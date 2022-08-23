<template>
  <el-card :shadow="options.shadow" :body-style="{ padding: options.padding }">
    <template #header>
      <div class="card-header">
        <span>{{ options.label }}</span>
      </div>
    </template>
    <object-builder :uuid="uuid" :items="items" :options="options" :path="path" />
  </el-card>
</template>

<script setup>
defineOptions({
  name: 'cardBuilder'
})
defineProps({
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
})
</script>

<style lang="scss" scoped></style>
