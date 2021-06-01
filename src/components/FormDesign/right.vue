<template>
  <el-tabs v-model="activeName" @tab-click="tabClick" stretch>
    <el-tab-pane label="表单配置" name="form">表单配置</el-tab-pane>
    <el-tab-pane label="组件配置" name="component">
      <div class="form-setting">
        <form-item-option v-model="formItemOptions"></form-item-option>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const activeName = ref('form')

    const tabClick = (tab, event) => {
      console.log(tab, event)
    }

    return {
      activeName,
      tabClick,
      formItemOptions: computed({
        get() {
          return store.getters.formItemOptions
        },
        set(value) {
          store.dispatch('design/updateFormItemOptions', value)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-setting {
  width: 100%;
  height: 100%;
  padding: 5px;
}
</style>
