<template>
  <div style="margin-bottom: 20px">
    <el-button type="primary" @click="addTab"> 添加 </el-button>
    <el-button type="primary" @click="editTab"> 修改 </el-button>
    <el-button type="danger" :disabled="items.length <= 0" @click="removeTab"> 删除 </el-button>
  </div>
  <el-tabs v-model="tabsValue" :type="options.tabType" :tab-position="options.tabPosition">
    <el-tab-pane :key="item.name" v-for="item in items" :label="item.options.label" :name="item.uuid">
      <object-builder
        :uuid="item.uuid"
        :items="item.items"
        :options="item.options"
        :path="path + '.' + item.options.key"
      ></object-builder>
    </el-tab-pane>
  </el-tabs>
  <el-dialog :title="tabDialog.title" v-model="tabDialog.isShow" width="750px">
    <el-form
      ref="formRef"
      :model="tabForm"
      :rules="rules"
      label-position="left"
      label-width="150px"
      style="width: 400px; margin-left: 50px"
    >
      <el-form-item label="标签名称" prop="label">
        <el-input v-model="tabForm.label" type="text"></el-input>
      </el-form-item>
      <el-form-item label="ID (字段名称/英文)" prop="key" style="margin-top: 22px">
        <el-input v-model="tabForm.key" type="text"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="tabDialog.isShow = false">取消</el-button>
        <el-button type="primary" @click="saveTab">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, inject, reactive, nextTick } from 'vue'
import { objectLayout } from '../../../config'
import { cloneDeep } from 'lodash-es'
import { uuid } from '@giantgo-render/utils'

defineOptions({
  name: 'tabsBuilder'
})
const props = defineProps({
  path: String,
  uuid: String,
  items: {
    type: Array,
    default() {
      return []
    }
  },
  options: {
    type: Object,
    default() {
      return {}
    }
  }
})

const updateFormItem = inject('updateFormItem')
const updateFormOption = inject('updateFormOption')
const tabsValue = ref('')
const tabDialog = reactive({
  title: '',
  isShow: false
})
const formRef = ref(null)
const rules = reactive({
  label: [{ required: true, message: '请输入标签名称', trigger: 'change' }],
  key: [{ required: true, message: '请输入ID', trigger: 'change' }]
})
const tabForm = reactive({
  uuid: '',
  label: '',
  key: ''
})

const addTab = () => {
  tabForm.uuid = ''
  tabForm.label = '标签' + (props.items.length + 1)
  tabForm.key = 'tab_' + uuid(8)
  tabDialog.isShow = true
  tabDialog.title = '添加'
  nextTick(() => {
    formRef.value && formRef.value.clearValidate()
  })
}

const editTab = () => {
  const item = props.items.find((tab) => tab.uuid === tabsValue.value)

  if (item) {
    tabForm.uuid = item.uuid
    tabForm.label = item.options.label
    tabForm.key = item.options.key
    tabDialog.isShow = true
    tabDialog.title = '编辑'
    nextTick(() => {
      formRef.value && formRef.value.clearValidate()
    })
  }
}

const removeTab = () => {
  const index = props.items.findIndex((tab) => tab.uuid === tabsValue.value)
  const nextTab = props.items[index + 1] || props.items[index - 1]

  updateFormItem({ uuid: props.uuid, items: props.items.filter((tab) => tab.uuid !== tabsValue.value) })

  if (nextTab) {
    tabsValue.value = nextTab.uuid
  }
}

const saveTab = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      if (!tabForm.uuid) {
        const item = cloneDeep(objectLayout)
        item.uuid = item.component.replaceAll('-', '_') + '_' + uuid(8)
        item.options.label = tabForm.label
        item.options.key = tabForm.key
        tabsValue.value = item.uuid
        updateFormItem({ uuid: props.uuid, items: [...props.items, item] })
      } else {
        const item = props.items.find((tab) => tab.uuid === tabsValue.value)

        if (item) {
          updateFormOption({ uuid: tabForm.uuid, key: 'label', value: tabForm.label })
          updateFormOption({ uuid: tabForm.uuid, key: 'key', value: tabForm.key })
        }
      }

      tabDialog.isShow = false
    }
  })
}
</script>

<style lang="scss" scoped></style>
