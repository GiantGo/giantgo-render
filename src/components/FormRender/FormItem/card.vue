<template>
  <el-card :shadow="config.options.shadow">
    <template #header>
      <div class="card-header">
        <span>{{ config.options.label }}</span>
      </div>
    </template>
    <object-item :config="config" :path="path"></object-item>
  </el-card>
</template>

<script>
import ObjectItem from '../FormItem/object.vue'

export default {
  name: 'cardItem',
  components: { ObjectItem },
  props: {
    path: String,
    config: {
      type: Object,
      default() {
        return {
          uuid: '',
          component: '',
          options: {},
          items: []
        }
      }
    }
  },
  setup() {}
}
</script>

<style lang="scss" scoped></style>
