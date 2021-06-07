<template>
  <div class="form-item" @click.stop="select" :class="{ 'is-selected': isSelected }">
    <div class="operator">
      <div class="copy" @click.stop="copy">
        <i class="el-icon-copy-document"></i>
      </div>
      <div class="remove" @click.stop="remove">
        <i class="el-icon-delete"></i>
      </div>
    </div>
    <div class="info">
      {{ config.options.key }}
    </div>
    <component
      :is="config.component"
      :config="config"
      :path="config.options.key ? path + '.' + config.options.key : path"
    ></component>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formItem',
  props: {
    path: String,
    config: {
      type: Object,
      default() {
        return {
          uuid: '',
          component: '',
          options: {},
          items: []
        }
      }
    }
  },
  setup(props) {
    const store = useStore()

    return {
      select: () => store.dispatch('design/setSeleted', props.config.uuid),
      copy: () => store.dispatch('design/copyFormItem', props.config.uuid),
      remove: () => store.dispatch('design/removeFormItem', props.config.uuid),
      isSelected: computed(() => store.getters.selected === props.config.uuid)
    }
  }
}
</script>

<style lang="scss" scoped></style>
