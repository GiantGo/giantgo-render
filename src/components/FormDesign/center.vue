<template>
  <div class="form-panel">
    <el-form :ref="formRef" :label-width="formOptions.labelWidth">
      <draggable
        class="form-item-panel"
        v-model="formItems"
        @start="dragStart"
        @end="dragEnd"
        item-key="name"
        :group="{ name: 'form-draggable' }"
        ghost-class="ghost"
      >
        <template #item="{ element }">
          <div class="form-item">
            {{ element.name }}
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

export default {
  components: { draggable },
  setup() {
    const store = useStore()
    const formRef = ref(null)

    const dragStart = () => {
      console.log(arguments)
    }
    const dragEnd = () => {
      console.log(arguments)
    }

    return {
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
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-panel {
  width: 100%;
  height: 100%;

  .el-form {
    width: 100%;
    height: 100%;

    .form-item-panel {
      padding: 5px;
      min-height: 60px;
    }
  }
}
</style>
