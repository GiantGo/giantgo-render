<template>
  <div class="form-item" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <div class="form-item-box" :class="{ 'is-selected': isSelected, 'is-hover': isHover }" @click.stop="select">
      <div class="operator">
        <div class="copy" @click.stop="copy">
          <el-icon><i-carbon-copy-file /></el-icon>
        </div>
        <div class="remove" @click.stop="remove">
          <el-icon><i-carbon-trash-can /></el-icon>
        </div>
      </div>
      <div class="info">{{ options.key }}</div>
      <component
        :is="component + '-builder'"
        v-if="!options.hidden"
        :uuid="uuid"
        :items="items"
        :options="options"
        :path="path"
      />
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'

const components = {}
Object.values(import.meta.globEager('./components/*.vue')).forEach(
  ({ default: component }) => (components[component.name] = component)
)

export default {
  name: 'FormBuilderItem',
  components: { ...components },
  props: {
    path: String,
    component: String,
    pUuid: String,
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
    const mouseEnter = inject('mouseEnter')
    const mouseLeave = inject('mouseLeave')
    const copyFormItem = inject('copyFormItem')
    const removeFormItem = inject('removeFormItem')

    return {
      select: () => setSelected(props.uuid),
      mouseenter: () => mouseEnter(props.uuid),
      mouseleave: () => mouseLeave(props.pUuid),
      copy: () => copyFormItem(props.uuid),
      remove: () => removeFormItem(props.uuid),
      isSelected: computed(() => state.selected.uuid === props.uuid),
      isHover: computed(() => state.hover === props.uuid)
    }
  }
}
</script>

<style lang="scss" scoped></style>
