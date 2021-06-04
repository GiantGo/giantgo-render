<template>
  <div class="form-item-picker">
    <div class="form-item-section">
      <div class="title">基础组件</div>
      <draggable
        class="form-item-group"
        v-model="basics"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
      >
        <template #item="{ element }">
          <div class="form-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">布局组件</div>
      <draggable
        class="form-item-group"
        v-model="layouts"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
      >
        <template #item="{ element }">
          <div class="form-item">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: { draggable },
  setup() {
    const store = useStore()
    return {
      basics: computed(() => store.getters.basics),
      layouts: computed(() => store.getters.layouts)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
</style>
