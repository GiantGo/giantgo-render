<template>
  <div class="form-item-picker">
    <div class="form-item-section">
      <div class="title">基础组件</div>
      <draggable
        class="form-item-group"
        v-model="basics"
        @start="dragStart"
        @end="dragEnd"
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
    const dragStart = () => {
      console.log(arguments)
    }
    const dragEnd = () => {
      console.log(arguments)
    }

    return {
      dragStart,
      dragEnd,
      basics: computed(() => store.getters.basics)
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
      margin-bottom: 10px;
      color: $primary-text;
    }

    .form-item-group {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .form-item {
        width: calc(50% - 10px);
        height: 36px;
        margin: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $bg-color;
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
