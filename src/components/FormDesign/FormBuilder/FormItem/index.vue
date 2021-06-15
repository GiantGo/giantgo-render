<template>
  <div
    class="form-item"
    :style="{
      width: options.width
    }"
  >
    <div class="form-item-box" @click.stop="select" :class="{ 'is-selected': isSelected }">
      <div class="operator">
        <div class="copy" @click.stop="copy">
          <i class="el-icon-copy-document"></i>
        </div>
        <div class="remove" @click.stop="remove">
          <i class="el-icon-delete"></i>
        </div>
      </div>
      <div class="info">
        {{ options.key }}
      </div>
      <component
        :is="component + '-builder'"
        :uuid="uuid"
        :items="items"
        :options="options"
        :path="options.key ? path + '.' + options.key : path"
      ></component>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formItemBuilder',
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
    const store = useStore()

    return {
      select: () => store.dispatch('design/setSeleted', props.uuid),
      copy: () => store.dispatch('design/copyFormItem', props.uuid),
      remove: () => store.dispatch('design/removeFormItem', props.uuid),
      isSelected: computed(() => store.getters.selected.uuid === props.uuid)
    }
  }
}
</script>

<style lang="scss" scoped></style>
