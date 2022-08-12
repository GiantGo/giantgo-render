<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-select
      v-if="!options.hidden"
      :model-value="options.defaultValue"
      :multiple="true"
      :collapse-tags="options.collapseTags"
      :multiple-limit="options.multipleLimit"
      :clearable="options.clearable"
      :disabled="options.disabled"
      :filterable="options.filterable"
      :placeholder="options.placeholder"
      :no-data-text="options.noDataText"
      :no-match-text="options.noMatchText"
    >
      <el-option v-for="item in items" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

export default {
  name: 'multiSelectBuilder',
  components: {},
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const state = inject('state')
    const { items } = useOptions(props, state.formDesign)

    return {
      items
    }
  }
}
</script>

<style lang="scss" scoped></style>
