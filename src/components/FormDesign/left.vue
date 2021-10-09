<template>
  <div class="form-item-picker">
    <div class="form-item-section">
      <div class="title">输入组件</div>
      <draggable
        class="form-item-group"
        v-model="inputs"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">选择组件</div>
      <draggable
        class="form-item-group"
        v-model="pickers"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="form-item-section">
      <div class="title">复杂组件</div>
      <draggable
        class="form-item-group"
        v-model="complexs"
        item-key="name"
        :group="{ name: 'form-draggable', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
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
        :clone="clone"
      >
        <template #item="{ element }">
          <div class="form-item-drop">
            {{ element.name }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'
import { uuid, deepClone } from '@/utils/index.js'
import { inputs, pickers, complexs, layouts } from './config.js'

export default {
  components: { draggable },
  setup() {
    return {
      clone: (original) => {
        const item = deepClone(original)
        item.uuid = item.options.key = item.component + '_' + uuid(8)
        return item
      },
      inputs,
      pickers,
      complexs,
      layouts
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-item-picker {
  height: 100%;
  padding: 5px;

  .form-item-section {
    margin-top: 10px;

    .title {
      font-weight: bold;
      margin-bottom: 10px;
      padding-left: 5px;
      color: $primary-text;
    }

    .form-item-group {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;

      .form-item-drop {
        width: calc(50% - 10px);
        height: 36px;
        margin: 5px;
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
