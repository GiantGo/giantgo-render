<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <el-radio-group v-if="!options.hidden" :model-value="options.defaultValue" :disabled="options.disabled">
      <el-radio v-for="item in items" :key="item.value" :label="item.value">
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
import { inject } from 'vue'
import { useOptions } from '@giantgo-render/hooks'

export default {
  name: 'radioBuilder',
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
