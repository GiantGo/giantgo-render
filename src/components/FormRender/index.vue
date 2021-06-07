<template>
  <el-form
    :class="'form-' + mode"
    ref="formRef"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    v-model="formData"
  >
    <form-item class="root" :config="formDesign" path="root"></form-item>
    <el-button class="mt-10" type="primary" @click="submit">提交</el-button>
  </el-form>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formRender',
  props: {},
  setup() {
    const formRef = ref(null)
    const store = useStore()

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(store.getters.formData)
        }
      })
    }

    return {
      formRef,
      mode: computed(() => store.getters.mode),
      formDesign: computed(() => store.getters.formDesign),
      formData: computed(() => store.getters.formData),
      submit
    }
  }
}
</script>

<style lang="scss" scoped></style>
