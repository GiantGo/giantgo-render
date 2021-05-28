<template>
  <div class="form-design-container">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <center></center>
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import left from './left.vue'
import center from './center.vue'
import right from './right.vue'

export default {
  components: { left, center, right },
  setup() {
    const state = reactive({ count: 0 })
    return { state }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
.form-design-container {
  display: flex;
  overflow: hidden;
  height: 100%;
  min-height: 30vh;
  position: relative;

  .left-container,
  .right-container {
    width: $sideBarWidth;
    height: 100%;
    padding: 10px 0 0 0;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .center-container {
    display: flex;
    flex: 1;
    height: 100%;
    border-left: 1px solid $divider-color;
    border-right: 1px solid $divider-color;
    padding: 5px;
  }
}
</style>
