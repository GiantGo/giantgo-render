<template>
  <div class="form-setting">
    <el-tabs v-model="activeName" @tab-click="tabClick" stretch>
      <el-tab-pane label="表单配置" name="form">表单配置</el-tab-pane>
      <el-tab-pane label="组件配置" name="component">组件配置</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const activeName = ref('form')

    const tabClick = (tab, event) => {
      console.log(tab, event)
    }

    return { activeName, tabClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
</style>
