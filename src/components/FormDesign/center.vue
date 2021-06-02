<template>
  <div class="form-panel">
    <el-empty v-if="formDesign.fields.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
    <el-form :ref="formRef" :label-width="formOptions.labelWidth">
      <form-item
        :component="formDesign.component"
        :options="formDesign.options"
        v-model="formData"
        v-model:fields="formDesign.fields"
      ></form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import FormItem from '../FormItem/index.vue'

export default {
  components: { FormItem },
  setup() {
    const store = useStore()
    const formRef = ref(null)
    const formData = reactive({})

    return {
      formRef,
      formData,
      formOptions: computed(() => store.getters.formOptions),
      formDesign: computed(() => store.getters.formDesign)
    }
  }
}
</script>

<style lang="scss"></style>
