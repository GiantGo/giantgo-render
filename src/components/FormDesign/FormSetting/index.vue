<template>
  <el-form label-position="left" label-width="120px" :key="selected.uuid">
    <div v-for="(value, key) in selected.options" :key="key">
      <form-option :option-key="key" :option-value="value"> </form-option>
    </div>
  </el-form>
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

<style lang="scss" scoped></style>
