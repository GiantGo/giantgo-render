<template>
  <div class="form-item">
    <div class="form-item-box" @click.stop="select" :class="{ 'is-selected': isSelected }">
      <div class="operator">
        <div class="copy" @click.stop="copy">
          <el-icon><i-carbon-copy-file /></el-icon>
        </div>
        <div class="remove" @click.stop="remove">
          <el-icon><i-carbon-trash-can /></el-icon>
        </div>
      </div>
      <div class="info">
        {{ options.key }}
      </div>
      <component :is="component + '-builder'" :uuid="uuid" :items="items" :options="options" :path="path"></component>
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
import { ElIcon } from 'element-plus'

const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'formBuilderItem',
  components: { ...components, ElIcon },
  props: {
    path: String,
    component: String,
    uuid: String,
    defaultValue: [String, Number, Boolean, Date, Object, Array],
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
  },
  setup(props) {
    const state = inject('state')
    const setSelected = inject('setSelected')
    const copyFormItem = inject('copyFormItem')
    const removeFormItem = inject('removeFormItem')

    return {
      select: () => setSelected(props.uuid),
      copy: () => copyFormItem(props.uuid),
      remove: () => removeFormItem(props.uuid),
      isSelected: computed(() => state.selected.uuid === props.uuid)
    }
  }
}
</script>

<style lang="scss" scoped></style>
