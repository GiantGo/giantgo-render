<template>
  <div class="form-operator">
    <el-tooltip class="item" effect="dark" content="预览" placement="top">
      <i class="el-icon-view" />
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="清空" placement="top">
      <i class="el-icon-delete" @click="clear" />
    </el-tooltip>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  components: {},
  setup() {
    const store = useStore()

    const clear = () => {
      store.dispatch('design/init')
    }

    return {
      clear
    }
  }
}
</script>

<style lang="scss"></style>
