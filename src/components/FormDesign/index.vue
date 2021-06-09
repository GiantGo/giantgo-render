<template>
  <div class="form-design-container">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <operator></operator>
      <form-builder />
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
import left from './left.vue'
import right from './right.vue'
import operator from './operator.vue'

export default {
  components: { left, right, operator },
  setup() {}
}
</script>

<style lang="scss">
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
    padding: 0;
    overflow-y: auto;
    flex-shrink: 0;
  }

  .center-container {
    display: flex;
    position: relative;
    flex: 1;
    height: 100%;
    padding: 5px;
    flex-direction: column;
    border-left: 1px solid $divider-color;
    border-right: 1px solid $divider-color;
  }
}
</style>
