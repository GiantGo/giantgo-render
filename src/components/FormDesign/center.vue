<template>
  <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <form-render></form-render>
</template>

<script>
import FormRender from '../FormRender/index.vue'

export default {
  components: { FormRender },
  setup() {}
}
</script>

<style lang="scss"></style>
