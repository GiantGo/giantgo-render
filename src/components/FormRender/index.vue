<template>
  <el-form
    class="form-render"
    ref="formRef"
    :label-width="formDesign.options.labelWidth"
    :label-position="formDesign.options.labelPosition"
    :hide-required-asterisk="formDesign.options.hideRequiredAsterisk"
    :status-icon="formDesign.options.statusIcon"
    :inline="formDesign.options.inline"
    :size="formDesign.options.size"
    :model="formData"
  >
    <form-item-render
      class="root"
      v-model="formData.root"
      :component="formDesign.component"
      :uuid="formDesign.uuid"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-item-render>
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, toRaw, nextTick } from 'vue'

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
        data[item.options.key] = item.options.defaultValue ? item.options.defaultValue : item.type()

        if (item.items) {
          traverse(item.items, data[item.options.key])
        }
      })
    }

    const init = (config) => {
      formDesign.component = config.component
      formDesign.uuid = config.uuid
      formDesign.items = config.items
      formDesign.options = config.options
      formData.root = {}
      traverse(formDesign.items, formData.root)
      formRef.value && formRef.value.clearValidate()
    }

    const submit = () => {
      formRef.value.validate((valid) => {
        if (valid) {
          console.log(toRaw(formData.root))
        }
      })
    }

    const reset = () => {
      formRef.value.resetFields()
    }

    return {
      formRef,
      formDesign,
      formData,
      init,
      submit,
      reset
    }
  }
}
</script>

<style lang="scss">
.form-render {
  position: relative;
  padding: 10px 2px 2px 2px;
  height: 100%;
  overflow: auto;

  &.el-form--inline {
    .form-item-list {
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      justify-content: flex-start;
    }
  }
}

.btn-submit {
  margin-top: 10px;
  text-align: center;
}
</style>
