<template>
  <div class="form-setting">
    <div class="title">{{ selected.uuid === 'root' ? '表单设置' : '字段设置' }}</div>
    <el-form :key="selected.uuid" label-position="left" label-width="120px">
      <div v-for="(value, key) in selected.options" :key="key">
        <form-option-item v-if="key !== 'defaultValue' || !selected.items" :option-key="key" :option-value="value"/>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

defineOptions({
  name: 'formSetting'
})
const state = inject('state')
const selected = computed(() => state.selected)
</script>

<style lang="scss"></style>
