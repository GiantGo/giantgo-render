<template>
  <el-form label-position="left" label-width="120px" :key="selected.uuid">
    <el-row v-for="(value, key) in selected.options" :key="key">
      <el-col :span="22">
        <component
          :is="key + 'Option'"
          :model-value="selected.options[key]"
          @update:modelValue="updateOption(key, $event)"
          :selected="selected"
        >
        </component>
      </el-col>
      <el-col :span="2" class="code-switch" v-if="isPrimitive(selected.options[key])">
        <svg-icon name="code" class-name="icon"></svg-icon>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { inject, computed } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { isPrimitive } from '@/utils'

export default {
  name: 'formSetting',
  components: { SvgIcon },
  props: {},
  setup() {
    const state = inject('state')
    const updateSelectedFormOption = inject('updateSelectedFormOption')

    return {
      isPrimitive,
      selected: computed(() => state.selected),
      updateOption: (key, value) => updateSelectedFormOption({ key, value })
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
