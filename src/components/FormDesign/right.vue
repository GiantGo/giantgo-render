<template>
  <el-tabs v-model="activeName" stretch>
    <el-tab-pane label="表单配置" name="formOptions">
      <div class="form-setting">
        <form-option></form-option>
      </div>
    </el-tab-pane>
    <el-tab-pane label="组件配置" name="formItemOptions">
      <div class="form-setting">
        <form-item-option></form-item-option>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {},
  props: {},
  setup() {
    const activeName = ref('formOptions')
    const store = useStore()

    store.watch(
      (state) => state.design.selected,
      () => {
        activeName.value = 'formItemOptions'
      }
    )

    return {
      activeName
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-setting {
  width: 100%;
  height: 100%;
  padding: 8px;
  overflow-y: auto;
}
</style>
