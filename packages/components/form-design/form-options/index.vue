<template>
  <div class="form-setting">
    <div class="title">{{ selected.uuid === 'root' ? '表单设置' : '字段设置' }}</div>
    <el-form label-position="left" label-width="120px" :key="selected.uuid">
      <div v-for="(value, key) in selected.options" :key="key">
        <form-option-item :option-key="key" :option-value="value" v-if="key !== 'defaultValue' || !selected.items">
        </form-option-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import { ElForm } from 'element-plus'
import FormOptionItem from './form-option-item/index.vue'

export default {
  name: 'formSetting',
  components: { ElForm, FormOptionItem },
  props: {},
  setup() {
    const state = inject('state')
    return {
      selected: computed(() => state.selected)
    }
  }
}
</script>

<style lang="scss"></style>
