<template>
  <el-form
    class="form-render"
    ref="formRef"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    :model="formData"
  >
    <form-item-render
      class="root"
      v-model="formData.root"
      :render="formDesign.render"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-item-render>
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="submit">重置</el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, toRaw } from 'vue'

export default {
  name: 'formRender',
  components: {},
  props: {},
  setup() {
    const formRef = ref(null)
    const formDesign = reactive({
      render: 'object-render',
      uuid: '',
      items: [],
      options: {}
    })
    const formData = reactive({
      root: {}
    })

    const traverse = (items, data) => {
      items.forEach((item) => {
        data[item.options.key] = item.type(item.options.default)

        if (item.items) {
          traverse(item.items, data[item.options.key])
        }
      })
    }

    const init = (config) => {
      formDesign.render = config.render
      formDesign.uuid = config.uuid
      formDesign.items = config.items
      formDesign.options = config.options
      formData.root = {}
      traverse(formDesign.items, formData.root)
    }

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(toRaw(formData.root))
        }
      })
    }

    return {
      formRef,
      formDesign,
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
