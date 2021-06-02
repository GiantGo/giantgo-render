<template>
  <div class="form-panel">
    <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
    <el-form :ref="formRef" :label-width="formOptions.labelWidth">
      {{ formItems }}
      <form-item :component="formDesign.component" :options="formDesign.options" v-model:items="formItems"></form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import FormItem from '../FormItem/index.vue'

export default {
  components: { FormItem },
  setup() {
    const store = useStore()
    const formRef = ref(null)

    return {
      formRef,
      formOptions: computed(() => store.getters.formOptions),
      formDesign: computed(() => store.getters.formDesign),
      formItems: computed({
        get() {
          return store.getters.formDesign.items
        },
        set(value) {
          store.dispatch('design/updateFormItems', value)
        }
      })
    }
  }
}
</script>

<style lang="scss"></style>
