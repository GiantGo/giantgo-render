<template>
  <el-empty v-if="formDesign.items?.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <el-form
    class="form-builder"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    :hide-required-asterisk="formDesign.options.hideRequiredAsterisk"
    :status-icon="formDesign.options.statusIcon"
    :inline="formDesign.options.inline"
    :size="formDesign.options.size"
  >
    <form-builder-item
      class="root"
      :component="formDesign.component"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-builder-item>
  </el-form>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import type { FormDesign } from '@giantgo-render/tokens'

defineOptions({
  name: 'formBuilder'
})

const state: {
  formDesign: FormDesign
} = inject('state') || {
  formDesign: {
    name: '',
    uuid: '',
    component: '',
    options: {}
  }
}
const formDesign = computed(() => state.formDesign)
</script>

<style lang="scss"></style>
