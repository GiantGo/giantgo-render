<template>
  <div class="form-design">
    <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
    <el-form
      :ref="formRef"
      :label-width="formDesign.options.labelWidth"
      :label-position="formDesign.options.labelPosition"
    >
      <form-item
        class="root"
        :component="formDesign.component"
        :uuid="formDesign.uuid"
        v-model:items="formItems"
      ></form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import FormItem from '../FormItem/index.vue'

export default {
  components: { FormItem },
  setup() {
    const store = useStore()
    const formRef = ref(null)

    onMounted(() => {
      store.dispatch('design/init')
    })

    return {
      formRef,
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
