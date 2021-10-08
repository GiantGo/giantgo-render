<template>
  <el-form label-position="left" label-width="120px" :key="selected.uuid">
    <el-row v-for="(value, key) in selected.options" :key="key">
      <el-col :span="isPrimitive(selected.options[key]) ? 22 : 24">
        <el-form-item :label="optionKeyLabels[key]">
          <el-input
            v-if="validateInterpolation(selected.options[key])"
            type="text"
            :model-value="selected.options[key]"
            @update:modelValue="updateOption(key, $event)"
          ></el-input>
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
        <svg-icon name="code" class-name="icon" @click="switchInterpolate(key)"></svg-icon>
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

export default {
  name: 'formSetting',
  components: { SvgIcon },
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
.code-switch {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .svg-icon {
    font-size: 16px;
    margin-bottom: 22px;
    cursor: pointer;
  }
}
</style>
