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

.form-item-picker {
  height: 100%;
  padding: 10px;

  .form-item-section {
    & + & {
      margin-top: 10px;
    }

    .title {
      font-weight: bold;
      margin-bottom: 15px;
      color: $primary-text;
    }

    .form-item-group {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      margin-bottom: 15px;

      .form-item {
        width: calc(50% - 10px);
        height: 36px;
        margin: 0 8px 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $deep-light-primary-color;
        cursor: move;
        color: $normal-text;

        &.ghost {
          opacity: 0.5;
          background: #c8ebfb;
        }

        &:hover {
          color: $primary-color;
          border: 1px dashed $primary-color;
        }
      }
    }
  }
}
</style>
