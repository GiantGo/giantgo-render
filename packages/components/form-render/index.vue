<template>
  <el-form
    ref="formRef"
    class="form-render"
    :label-width="state.formDesign.options.labelWidth"
    :label-position="state.formDesign.options.labelPosition"
    :hide-required-asterisk="state.formDesign.options.hideRequiredAsterisk"
    :status-icon="state.formDesign.options.statusIcon"
    :inline="state.formDesign.options.inline"
    :size="state.formDesign.options.size"
    :model="state.formData"
  >
    <form-render-item
      v-model="state.formData.root"
      class="root"
      :component="state.formDesign.component"
      :items="state.formDesign.items"
      :options="state.formDesign.options"
      path="root"
    />
    <div class="btn-submit">
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref, toRaw } from 'vue'
import { ElButton, ElForm } from 'element-plus'
import { getInterpolation, validateInterpolation } from '@giantgo-render/utils'
import mitt from 'mitt'

import type { FormDesign, FormDesignInterpolation, FormDesignOption } from '@giantgo-render/tokens'

type FormData = {
  [propName: string]: any
}

defineOptions({
  name: 'formRender'
})

const formRef = ref<InstanceType<typeof ElForm> | null>(null)
const emit = defineEmits(['submit'])
const state = reactive<{
  formDesign: FormDesignInterpolation
  formData: { root: FormData }
}>({
  formDesign: {
    name: '',
    uuid: '',
    component: 'object',
    options: {}
  },
  formData: {
    root: {}
  }
})
const emitter = mitt()

const traverse = (items: Array<FormDesign>, form: FormData, data: FormData = { root: {} }) => {
  items.forEach((item: FormDesign) => {
    const key: keyof FormDesignOption = item.options.key || ''

    if (key) {
      form[key] = data[key] || item.options.defaultValue
    }

    // 处理插值表达式
    for (const option in item.options) {
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
        item.options[option] = computed<any>({
          get() {
            return functionBody(state.formData.root, item.options)
          },
          set() {}
        })
      }
    }

    if (item.items && key) {
      traverse(item.items, form[key], data[key])
    }
  })

  return items
}

const init = (config: FormDesign, data: object = {}) => {
  state.formDesign = config
  state.formDesign.options.key = 'root'
  state.formDesign.options.defaultValue = {}
  traverse([config], state.formData, { root: data })
  formRef.value && formRef.value.clearValidate()
}

const submit = () => {
  formRef.value!.validate((valid, error) => {
    if (valid) {
      emit('submit', toRaw(state.formData.root))
    } else {
      emitter.emit('validateError', Object.keys(error!)[0])
    }
  })
}

const reset = () => {
  formRef.value && formRef.value.resetFields()
}

provide('emitter', emitter)
provide('state', state)

defineExpose({
  init,
  submit,
  reset
})
</script>

<style lang="scss"></style>
