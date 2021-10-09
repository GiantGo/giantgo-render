<template>
  <el-form label-position="left" label-width="120px" :key="selected.uuid">
    <el-row v-for="(value, key) in selected.options" :key="key">
      <el-col :span="isPrimitive(selected.options[key]) ? 22 : 24">
        <el-form-item :label="optionKeyLabels[key]">
          <interpolation
            v-if="validateInterpolation(selected.options[key])"
            :model-value="selected.options[key]"
            @update:modelValue="updateOption(key, $event)"
          ></interpolation>
          <component
            v-else
            :is="key + 'Option'"
            :model-value="selected.options[key]"
            @update:modelValue="updateOption(key, $event)"
            :selected="selected"
          >
          </component>
        </el-form-item>
      </el-col>
      <el-col :span="2" class="code-switch" v-if="isPrimitive(selected.options[key])">
        <svg-icon
          name="code"
          :class-name="validateInterpolation(selected.options[key]) ? 'highlight' : ''"
          @click="switchInterpolate(key)"
        ></svg-icon>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { inject, computed } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { isPrimitive } from '@/utils'
import { validateInterpolation } from '@/utils/validate'
import { optionKeyLabels } from '../config'
import Interpolation from './interpolation.vue'

export default {
  name: 'formSetting',
  components: { SvgIcon, Interpolation },
  props: {},
  setup() {
    const state = inject('state')
    const updateSelectedFormOption = inject('updateSelectedFormOption')
    const switchInterpolate = inject('switchInterpolate')

    return {
      isPrimitive,
      validateInterpolation,
      optionKeyLabels,
      selected: computed(() => state.selected),
      updateOption: (key, value) => updateSelectedFormOption({ key, value }),
      switchInterpolate: (key) => switchInterpolate(key)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

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
</style>
