<template>
  <el-row>
    <el-col :span="isPrimitive(optionValue) ? 22 : 24">
      <el-form-item :label="optionKeyLabels[optionKey]">
        <interpolation
          v-if="validateInterpolation(optionValue)"
          :model-value="optionValue"
          @update:modelValue="updateOption(optionKey, $event)"
        ></interpolation>
        <component
          v-else
          :is="optionKey + 'Option'"
          :model-value="optionValue"
          @update:modelValue="updateOption(optionKey, $event)"
        >
        </component>
      </el-form-item>
    </el-col>
    <el-col :span="2" class="code-switch" v-if="isPrimitive(optionValue) && optionKey !== 'defaultValue'">
      <CodeIcon
        class="svg-icon"
        :class-name="validateInterpolation(optionValue) ? 'highlight' : ''"
        @click="switchInterpolate(optionKey)"
      ></CodeIcon>
    </el-col>
  </el-row>
</template>

<script>
import { inject } from 'vue'
import { ElRow, ElCol, ElFormItem } from 'element-plus'
import { isPrimitive, validateInterpolation } from '@giantgo-render/utils'
import { optionKeyLabels } from '../../config'
import Interpolation from './interpolation.vue'
import CodeIcon from '../../../icons/code.svg'

const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'formOption',
  components: { ElRow, ElCol, ElFormItem, CodeIcon, Interpolation, ...components },
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
