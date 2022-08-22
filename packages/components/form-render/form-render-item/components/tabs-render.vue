<template>
  <el-tabs v-model="tabsValue" :type="options.tabType" :tab-position="options.tabPosition">
    <el-tab-pane :key="item.name" v-for="item in items" :label="item.options.label" :name="item.options.key">
      <object-render
        :items="item.items"
        :options="item.options"
        :path="path + '.' + item.options.key"
        :model-value="modelValue[item.options.key]"
        @update:modelValue="update(item.options.key, $event)"
      ></object-render>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
defineOptions({
  name: 'tabsRender'
})
const props = defineProps({
  path: String,
  modelValue: Object,
  items: {
    type: Array,
    default() {
      return []
    }
  },
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})
const emit = defineEmits(['update:modelValue'])
const tabsValue = ref('')
const emitter = inject('emitter')

const update = (key, value) => {
  emit('update:modelValue', Object.assign({}, props.modelValue, { [key]: value }))
}

onMounted(() => {
  tabsValue.value = props.items.length ? props.items[0].options.key : ''

  emitter.on('validateError', (path) => {
    for (let i = 0; i < props.items.length; i++) {
      const item = props.items[i]
      if (path.indexOf(props.path + '.' + item.options.key) > -1) {
        return (tabsValue.value = item.options.key)
      }
    }
  })
})
</script>

<style lang="scss" scoped></style>
