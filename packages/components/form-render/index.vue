<template>
  <el-form
    class="form-render"
    ref="formRef"
    :label-width="state.formDesign.options.labelWidth"
    :label-position="state.formDesign.options.labelPosition"
    :hide-required-asterisk="state.formDesign.options.hideRequiredAsterisk"
    :status-icon="state.formDesign.options.statusIcon"
    :inline="state.formDesign.options.inline"
    :size="state.formDesign.options.size"
    :model="state.formData"
  >
    <form-render-item
      class="root"
      v-model="state.formData.root"
      :component="state.formDesign.component"
      :items="state.formDesign.items"
      :options="state.formDesign.options"
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
import { getInterpolation, validateInterpolation } from '@giantgo-render/utils'
import mitt from 'mitt'
import FormRenderItem from './form-render-item/index.vue'

export default {
  name: 'formRender',
  components: { FormRenderItem },
  props: {},
  setup(props, { emit }) {
    const formRef = ref(null)
    const state = reactive({
      formDesign: {
        options: {
          key: '',
          defaultValue: {}
        }
      },
      formData: {}
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
                return functionBody(state.formData.root, item.options)
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
      state.formDesign = config
      state.formDesign.options.key = 'root'
      state.formDesign.options.defaultValue = {}

      traverse([state.formDesign], state.formData, { root: data })

      formRef.value && formRef.value.clearValidate()
    }

    const submit = () => {
      formRef.value.validate((valid, error) => {
        if (valid) {
          emit('submit', toRaw(state.formData.root))
        } else {
          emitter.emit('validateError', Object.keys(error)[0])
        }
      })
    }

    const reset = () => {
      formRef.value.resetFields()
    }

    provide('emitter', emitter)
    provide('state', state)

    return {
      formRef,
      state,
      init,
      submit,
      reset
    }
  }
}
</script>

<style lang="scss"></style>
