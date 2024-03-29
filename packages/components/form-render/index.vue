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
  </el-form>
</template>

<script setup lang="ts">
import { computed, provide, reactive, ref, toRaw } from 'vue'
import { cloneDeep } from 'lodash-es'
import { ElForm } from 'element-plus'
import { getInterpolation, isObject, validateInterpolation } from '@giantgo-render/utils'
import mitt from 'mitt'
import { form } from '../form-design/config'

import type { FormDesign, FormDesignInterpolation, FormDesignOption } from '@giantgo-render/tokens'

type FormData = {
  [propName: string]: any
}

type Events = {
  fieldChange: any
  validateError: any
}

defineOptions({
  name: 'formRender'
})

const formRef = ref<InstanceType<typeof ElForm> | null>(null)
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

const emit = defineEmits(['field-change'])
const emitter = mitt<Events>()

emitter.on('fieldChange', ({ key, value }): void => {
  emit('field-change', { key, value })
})

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

const init = (formDesign?: FormDesign, data: object = {}) => {
  state.formDesign = formDesign || cloneDeep(form)
  state.formDesign.options.key = 'root'
  state.formDesign.options.defaultValue = {}
  traverse([state.formDesign], state.formData, { root: data })
  formRef.value && formRef.value.clearValidate()
}

const submit = () => {
  return new Promise((resolve, reject) => {
    formRef.value!.validate((valid, error) => {
      if (valid) {
        resolve(toRaw(state.formData.root))
      } else {
        emitter.emit('validateError', Object.keys(error!)[0])
        reject(error)
      }
    })
  })
}

const reset = () => {
  formRef.value && formRef.value.resetFields()
}

const setFormData = (data: FormData, key: string, value: any) => {
  for (const k in data) {
    if (isObject(data[k])) {
      setFormData(data[k], key, value)
    } else if (k === key) {
      data[key] = value
      return
    }
  }
}

const setData = (key: string, value: any) => {
  setFormData(state.formData.root, key, value)
}

provide('emitter', emitter)
provide('state', state)

defineExpose({
  init,
  submit,
  reset,
  getData() {
    return state.formData.root
  },
  setData
})
</script>

<style lang="scss"></style>
