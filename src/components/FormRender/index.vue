<template>
  <el-form
    class="form-render"
    ref="formRef"
    :label-width="config.options.labelWidth"
    :label-position="config.options.labelPosition"
    v-model="formData"
  >
    <form-item-render
      class="root"
      :render="config.render"
      :uuid="config.uuid"
      :items="config.items"
      :options="config.options"
    ></form-item-render>
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="submit">重置</el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, watch } from 'vue'

export default {
  name: 'formRender',
  components: {},
  props: {
    config: Object
  },
  setup(props) {
    const formRef = ref(null)
    const formData = reactive({})

    const init = () => {}

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(formData)
        }
      })
    }

    const traverse  = () => {
      
    }

    watch(
      props.config,
      (config) => {
        
      },
      {
        deep: true
      }
    )

    return {
      formRef,
      formData,
      init,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-submit {
  margin-top: 10px;
  text-align: center;
}
</style>
