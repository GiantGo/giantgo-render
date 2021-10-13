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
import { ElForm } from 'element-plus'
import formOption from './FormOption/index.vue'

export default {
  name: 'formSetting',
  components: { ElForm, formOption },
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
