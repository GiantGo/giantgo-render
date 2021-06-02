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
import left from './left.vue'
import center from './center.vue'
import right from './right.vue'

export default {
  components: { left, center, right },
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

  .flip-list-move {
    transition: transform 0;
  }

  .form-panel {
    width: 100%;
    height: 100%;
    position: relative;

    .empty {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .el-form {
      width: 100%;
      height: 100%;
    }

    .form-item-panel {
      width: 100%;
      height: 100%;

      .form-item-drop {
        width: 100%;
        height: 100%;
        min-height: 60px;
        background: $white;
        border: 1px dashed $border;
        overflow-y: auto;
      }

      .form-item {
        position: relative;
        min-height: 60px;
        padding: 5px;
        margin: 5px;
        overflow: hidden;
        color: $normal-text;
        background: $deep-light-primary-color;

        .el-form-item {
          margin: 10px;
        }

        &.active:before {
          content: '';
          height: 5px;
          width: 100%;
          background: $primary-color;
          position: absolute;
          top: 0;
          left: 0;
          transition: all 0.3s;
        }
      }

      .form-item + .form-item {
        margin-top: 5px;
      }
    }
  }
}
</style>
