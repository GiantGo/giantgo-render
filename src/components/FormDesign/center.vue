<template>
  <div class="form-panel">
    <el-empty v-if="formItems.length === 0" class="empty" description="从左侧选择空间添加"></el-empty>
    <el-form :ref="formRef" :label-width="formOptions.labelWidth">
      <draggable
        class="form-item-panel"
        v-model="formItems"
        @start="dragStart"
        @end="dragEnd"
        tag="transition-group"
        item-key="name"
        v-bind="dragOptions"
        :component-data="{ tag: 'div', type: 'transition-group', name: !drag ? 'flip-list' : null }"
      >
        <template #item="{ element }">
          <div class="form-item">
            <form-item :options="element.options" :component="element.component"></form-item>
          </div>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import draggable from 'vuedraggable/src/vuedraggable'
import { useStore } from 'vuex'
import FormItem from '../FormItem/index.vue'

export default {
  components: { draggable, FormItem },
  setup() {
    const store = useStore()
    const drag = ref(false)
    const formRef = ref(null)

    const dragStart = () => {
      drag.value = true
    }
    const dragEnd = () => {
      drag.value = false
    }

    return {
      drag,
      dragStart,
      dragEnd,
      formRef,
      dragOptions: computed(() => {
        return { animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }
      }),
      formOptions: computed(() => store.getters.formOptions),
      formItems: computed({
        get() {
          return store.getters.formItems
        },
        set(value) {
          store.dispatch('design/updateFormItems', value)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.flip-list-move {
  transition: transform 0.5s;
}

.form-panel {
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px dashed $border;
  position: relative;

  .empty {
    position: absolute;
    width: 100%;
  }

  .el-form {
    width: 100%;
    height: 100%;
  }

  .form-item-panel {
    width: 100%;
    height: 100%;
    min-height: 60px;

    .form-item {
      position: relative;
      width: 100%;
      min-height: 36px;
      padding: 10px 5px;
      overflow: hidden;
      background: $deep-light-primary-color;

      &.active:before {
        content: '';
        height: 5px;
        width: 100%;
        background: $primary-color;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s;
      }
    }

    .form-item + .form-item {
      margin-top: 5px;
    }
  }
}
</style>
