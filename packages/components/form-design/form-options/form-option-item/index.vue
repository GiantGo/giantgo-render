<template>
  <el-row>
    <el-col :span="isPrimitive(optionValue) ? 22 : 24">
      <el-form-item :label="optionKeyLabels[optionKey]">
        <interpolation
          v-if="validateInterpolation(optionValue)"
          :model-value="optionValue"
          @update:modelValue="updateOption(optionKey, $event)"
        />
        <component
          :is="optionKey + 'Option'"
          v-else
          :model-value="optionValue"
          @update:modelValue="updateOption(optionKey, $event)"
        />
      </el-form-item>
    </el-col>
    <el-col v-if="isPrimitive(optionValue) && optionKey !== 'defaultValue'" :span="2" class="code-switch">
      <i-ant-design-code-outlined
        class="svg-icon"
        :class="validateInterpolation(optionValue) ? 'highlight' : ''"
        @click="switchInterpolate(optionKey)"
      />
    </el-col>
  </el-row>
</template>

<script>
import { inject } from 'vue'
import { isPrimitive, validateInterpolation } from '@giantgo-render/utils'
import { optionKeyLabels } from '../../config'

const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'FormOption',
  components: { ...components },
  props: {
    optionKey: String,
    optionValue: [String, Number, Boolean, Date, Object, Array]
  },
  setup() {
    const updateSelectedFormOption = inject('updateSelectedFormOption')
    const switchInterpolate = inject('switchInterpolate')
    return {
      isPrimitive,
      validateInterpolation,
      optionKeyLabels,
      updateOption: (key, value) => updateSelectedFormOption({ key, value }),
      switchInterpolate: (key) => switchInterpolate(key)
    }
  }
}
</script>
<style lang="scss" scoped></style>
