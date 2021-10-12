<template>
  <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <el-form
    class="form-builder"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    :hide-required-asterisk="formDesign.options.hideRequiredAsterisk"
    :status-icon="formDesign.options.statusIcon"
    :inline="formDesign.options.inline"
    :size="formDesign.options.size"
  >
    <form-builder-item
      class="root"
      :component="formDesign.component"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-builder-item>
  </el-form>
</template>

<script>
import { computed, inject } from 'vue'

export default {
  name: 'formBuilder',
  components: {},
  props: {},
  setup() {
    const state = inject('state')

    return {
      formDesign: computed(() => state.formDesign)
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.form-builder {
  position: relative;
  width: 100%;
  height: calc(100% - 55px);

  .form-item-drop-list {
    padding: 2.5px 5px;
    width: 100%;
    min-height: 60px;
    background: #ffffff;
    border: 1px dashed $border;
    overflow-x: hidden;
    overflow-y: auto;

    .form-item-drop {
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $deep-light-primary-color;
      color: $normal-text;
    }
  }

  .form-item {
    display: inline-block;
    padding: 0;
    width: 100%;
    line-height: 0px;
    overflow: hidden;
    vertical-align: top;

    .form-item-box {
      position: relative;
      width: 100%;
      padding: 28px 5px;
      background: $deep-light-primary-color;
      color: $normal-text;
      overflow: hidden;
      border: 2px solid $deep-light-primary-color;
      box-sizing: border-box;

      .operator {
        display: none;
        position: absolute;
        top: 0;
        right: 0;
        background: $primary-color;
        z-index: 1;
        border-bottom-left-radius: 8px;

        .remove,
        .copy {
          display: inline-block;
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          color: #ffffff;
        }

        i {
          font-weight: bold;
        }
      }

      .info {
        display: block;
        position: absolute;
        bottom: 2px;
        right: 5px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: $secondary-text;
      }

      &.is-selected {
        border: 2px solid $primary-color;

        & > .operator {
          display: block;
        }
      }

      .el-form-item {
        margin: 0px;
      }
    }
  }

  .form-item,
  .form-item-drop {
    margin: 2.5px 0;
  }

  .root {
    height: 100%;

    & > .form-item-box {
      height: 100%;
      padding: 3px;
      margin: 0;

      .form-item-drop-list {
        height: 100%;
      }

      &.is-selected > .operator {
        display: none;
      }
    }
  }

  .form-rate {
    line-height: 2;
  }
}
</style>
