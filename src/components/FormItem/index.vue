<template>
  <el-form-item :label="options.label">
    <component :is="component"></component>
  </el-form-item>
</template>

<script>
import ggInput from './input.vue'
import ggTextarea from './textarea.vue'
import ggCard from './card.vue'

export default {
  components: { ggInput, ggTextarea, ggCard },
  props: {
    component: {
      type: String,
      default: 'gg-input'
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
