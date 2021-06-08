<template>
  <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <el-form
    class="form-design"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
  >
    <form-item-builder
      class="root"
      :builder="formDesign.builder"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-item-builder>
    <el-button class="mt-10" type="primary" @click="submit">提交</el-button>
  </el-form>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formBuilder',
  components: {},
  props: {},
  setup() {
    const store = useStore()

    const init = () => {
      store.dispatch('design/init')
    }

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(store.getters.formData)
        }
      })
    }

    return {
      init,
      submit,
      mode: computed(() => store.getters.mode),
      formDesign: computed(() => store.getters.formDesign),
      formData: computed(() => store.getters.formData)
    }
  }
}
</script>

<style lang="scss" scoped></style>
