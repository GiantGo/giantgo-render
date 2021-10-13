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
    <form-render-item
      class="root"
      v-model="formData.root"
      :component="formDesign.component"
      :items="formDesign.items"
      :options="formDesign.options"
      path="root"
    ></form-render-item>
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </div>
  </el-form>
</template>

<script>
import { ref, reactive, toRaw, computed, provide } from 'vue'
import { ElForm, ElButton } from 'element-plus'
import { getInterpolation, validateInterpolation } from '../../utils'
import mitt from 'mitt'
import FormRenderItem from './FormRenderItem/index.vue'

export default {
  name: 'formRender',
  components: { ElForm, FormRenderItem, ElButton },
  props: {},
  setup(props, { emit }) {
    const formRef = ref(null)
    const formDesign = reactive({
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

        // 处理插值表达式
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
      formDesign.items = config.items
      formDesign.options = config.options
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

<style lang="scss"></style>
