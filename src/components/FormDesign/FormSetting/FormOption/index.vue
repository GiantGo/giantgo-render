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
      <svg-icon
        name="code"
        :class-name="validateInterpolation(optionValue) ? 'highlight' : ''"
        @click="switchInterpolate(optionKey)"
      ></svg-icon>
    </el-col>
  </el-row>
</template>

<script>
import { inject } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { isPrimitive, validateInterpolation } from '@/utils'
import { optionKeyLabels } from '../../config'
import Interpolation from './interpolation.vue'

export default {
  name: 'formOption',
  components: { SvgIcon, Interpolation },
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
