<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="tools">
      <el-button class="add-btn" type="primary" @click="add">
        <el-icon><i-carbon-add /></el-icon> 添加
      </el-button>
    </div>
    <el-table class="edit-table" :data="data.items" style="width: 100%" border>
      <el-table-column type="index" width="80" label="序号" align="center"/>
      <el-table-column v-for="(item, index) in items" :key="index" :prop="item.options.key" :label="item.options.label"/>
      <el-table-column label="操作" align="center" width="120" class-name="small-padding">
        <template #default="scope">
          <el-button type="primary" circle @click="edit(scope.$index, scope.row)">
            <el-icon><i-carbon-edit /></el-icon>
          </el-button>
          <el-button type="danger" circle @click="remove(scope.$index)">
            <el-icon><i-carbon-trash-can /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form-item>
  <el-dialog v-model="formDialog.isShow" :title="formDialog.title" :close-on-click-modal="false" width="750px">
    <form-render ref="formRenderRef" @submit="save" />
  </el-dialog>
</template>

<script setup>
import { inject, nextTick, onMounted, reactive, ref, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

defineOptions({
  name: 'tableRender'
})

const props = defineProps({
  path: String,
  modelValue: Array,
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

const emit = defineEmits(['update:modelValue'])

const state = inject('state')
const data = reactive({
  items: []
})
const formRenderRef = ref(null)
const formDialog = reactive({
  title: '',
  isShow: false,
  index: -1
})

const add = () => {
  formDialog.title = '添加'
  formDialog.isShow = true
  formDialog.index = -1
  nextTick(() => {
    setTimeout(() => {
      formRenderRef.value && formRenderRef.value.init(Object.assign({}, state.formDesign, { items: props.items }))
    }, 20)
  })
}

const edit = (index, item) => {
  formDialog.title = '编辑'
  formDialog.isShow = true
  formDialog.index = index
  nextTick(() => {
    setTimeout(() => {
      formRenderRef.value && formRenderRef.value.init(Object.assign({}, state.formDesign, { items: props.items }), item)
    }, 20)
  })
}

const remove = (index) => {
  data.items.splice(index, 1)
  emit('update:modelValue', data.items)
}

const save = (result) => {
  if (formDialog.index > -1) {
    data.items.splice(formDialog.index, 1, result)
  } else {
    data.items.push(result)
  }
  formDialog.isShow = false
  emit('update:modelValue', data.items)
}

const setInternal = () => {
  data.items = cloneDeep(props.modelValue)
}

onMounted(setInternal)
watch(() => props.modelValue, setInternal)
</script>

<style lang="scss" scoped>
.tools {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: ' ';
    clear: both;
    height: 0;
  }

  .add-btn {
    float: right;
  }
}

.edit-table {
  margin-top: 10px;
}
</style>
