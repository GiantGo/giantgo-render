<template>
  <el-input type="text" :model-value="modelValue" @input="$emit('update:modelValue', $event)">
    <template #append>
      <el-button @click="drawer = !drawer">选择</el-button>
    </template>
  </el-input>
  <el-drawer v-model="drawer" direction="rtl" :show-close="false" :with-header="false" size="380px">
    <el-tooltip v-for="(value, key) in ElementPlusIconsVue" :key="key" effect="dark" :content="key" placement="top">
      <component :is="value" style="width: 24px; cursor: pointer" @click="pickIcon(key)" />
    </el-tooltip>
  </el-drawer>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ref } from 'vue'

defineOptions({
  name: 'prefixIconOption'
})
defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
const drawer = ref(false)

const pickIcon = (icon) => {
  emit('update:modelValue', icon)
  drawer.value = false
}
</script>

<style lang="scss" scoped></style>
