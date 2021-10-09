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
    ></form-item-render>
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, toRaw, computed, provide } from 'vue'
import { deepClone, getInterpolation } from '@/utils/index.js'
import { validateInterpolation } from '@/utils/validate.js'
import mitt from 'mitt'

export default {
  name: 'formRender',
  components: {},
  props: {},
  setup(props, { emit }) {
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
    const emitter = mitt()

    const traverse = (items, form, data = {}) => {
      items.forEach((item) => {
        const key = item.options.key
        form[key] = data[key] || item.options.defaultValue

        //处理插值表达式
        for (let option in item.options) {
          if (validateInterpolation(item.options[option])) {
            const functionBody = new Function(
              'root',
              'options',
              `try {
                return ${getInterpolation(item.options[option])}
              } catch(e) {
                console.log(e)
              }`
            )
            item.options[option] = computed({
              get() {
                return functionBody(formData.root, item.options)
              }
            })
          }
        }

        if (item.items) {
          traverse(item.items, form[key], data[key])
        }
      })
    }

    const init = (config, data) => {
      formDesign.component = config.component
      formDesign.uuid = config.uuid
      formDesign.items = deepClone(config.items)
      formDesign.options = deepClone(config.options)
      formDesign.options.key = 'root'
      formDesign.options.defaultValue = {}
      traverse([formDesign], formData, data)

      formRef.value && formRef.value.clearValidate()
    }

    const submit = () => {
      formRef.value.validate((valid, error) => {
        if (valid) {
          emit('submit', toRaw(formData.root))
        } else {
          emitter.emit('validateError', Object.keys(error)[0])
        }
      })
    }

    const reset = () => {
      formRef.value.resetFields()
    }

    provide('emitter', emitter)

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

  .form-item {
    display: inline-block;
    width: 100%;
    line-height: 0px;
    vertical-align: top;
  }
}

.btn-submit {
  margin-top: 10px;
  text-align: center;
}
</style>
