<template>
  <div class="form-panel">
    {{ formItems }}
    <el-empty v-if="formItems.length === 0" class="empty" description="从左侧选择空间添加"></el-empty>
    <el-form :ref="formRef" :label-width="formOptions.labelWidth">
      <draggable
        class="form-item-panel"
        v-model="formItems"
        @start="dragStart"
        @end="dragEnd"
        tag="transition-group"
        item-key="name"
        v-bind="{ animation: 200, group: 'form-draggable', disabled: false, ghostClass: 'ghost' }"
        :component-data="{ tag: 'div', type: 'transition-group', name: !drag ? 'flip-list' : null }"
      >
        <template #item="{ element }">
          <div class="form-item" @click="select(element)">
            <form-item :options="element.options" :fields="element.fields" :component="element.component"></form-item>
          </div>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import draggable from 'vuedraggable/src/vuedraggable'
import FormItem from '../FormItem/index.vue'
import useDrag from '../FormItem/useDrag'

export default {
  components: { draggable, FormItem },
  setup() {
    const store = useStore()
    const formRef = ref(null)
    const { drag, dragStart, dragEnd } = useDrag()

    const select = (element) => {
      store.dispatch('design/setSeleted', element.uuid)
    }

    return {
      drag,
      dragStart,
      dragEnd,
      formRef,
      formOptions: computed(() => store.getters.formOptions),
      formItems: computed({
        get() {
          return store.getters.formItems
        },
        set(value) {
          store.dispatch('design/updateFormItems', value)
        }
      }),
      select
    }
  }
}
</script>

<style lang="scss"></style>
