<template>
  <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <el-form
    class="form-design"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    :hide-required-asterisk="formDesign.options.hideRequiredAsterisk"
    :status-icon="formDesign.options.statusIcon"
    :inline="formDesign.options.inline"
    :size="formDesign.options.size"
  >
    <form-item-builder
      class="root"
      :component="formDesign.component"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-item-builder>
    <el-button class="mt-10" type="primary" @click="submit">提交</el-button>
  </el-form>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formBuilder',
  components: {},
  props: {},
  setup() {
    const store = useStore()

    const init = () => {
      store.dispatch('design/init')
    }

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(store.getters.formData)
        }
      })
    }

    return {
      init,
      submit,
      mode: computed(() => store.getters.mode),
      formDesign: computed(() => store.getters.formDesign),
      formData: computed(() => store.getters.formData)
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.empty {
  position: absolute;
  width: 100%;
  height: calc(100% - 45px);
  top: 60px;
  z-index: 1;
}

.form-design {
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;

  .form-item-drop-list {
    width: 100%;
    min-width: 300px;
    min-height: 60px;
    background: $white;
    border: 1px dashed $border;
    overflow-y: auto;

    .form-item-drop {
      margin: 5px;
      padding: 17px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $deep-light-primary-color;
      color: $normal-text;
    }
  }

  .form-item {
    position: relative;
    padding: 28px 5px;
    margin: 5px;
    min-width: 120px;
    overflow: hidden;
    box-sizing: border-box;
    border: 2px solid white;
    background: $deep-light-primary-color;
    color: $normal-text;

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
        color: $white;
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

      &:not(.root) > .operator {
        display: block;
      }
    }

    .el-form-item {
      margin: 0px;
    }
  }

  .form-item + .form-item {
    margin-top: 5px;
  }

  .root {
    height: 100%;
    padding: 5px;
    margin: 0;

    & > .form-item-drop-list {
      height: 100%;
    }
  }

  &.el-form--inline {
    .form-item-drop-list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: flex-start;
    }
  }
}
</style>
