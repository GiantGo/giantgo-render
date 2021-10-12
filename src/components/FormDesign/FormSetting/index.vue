<template>
  <div class="form-setting">
    <el-form label-position="left" label-width="120px" :key="selected.uuid">
      <div v-for="(value, key) in selected.options" :key="key">
        <form-option :option-key="key" :option-value="value" v-if="key !== 'defaultValue' || !selected.items">
        </form-option>
      </div>
    </el-form>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import formOption from './FormOption/index.vue'

export default {
  name: 'formSetting',
  components: { formOption },
  props: {},
  setup() {
    const state = inject('state')
    return {
      selected: computed(() => state.selected)
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/variables.scss';

.form-setting {
  width: 100%;
  height: 100%;
  padding: 5px 10px 5px 10px;
  overflow-x: hidden;
  overflow-y: auto;

  .el-form-item__label {
    padding-right: 5px;
  }

  .code-switch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .svg-icon {
      font-size: 16px;
      margin-bottom: 22px;
      cursor: pointer;
    }
    .svg-icon.highlight {
      color: $primary-color;
    }
  }

  .option-row {
    .btn-del {
      text-align: center;
    }

    .el-icon-delete {
      cursor: pointer;
      color: $danger-color;
      font-weight: bold;
    }
  }

  .option-row + .option-row {
    margin-top: 5px;
  }
}
</style>
