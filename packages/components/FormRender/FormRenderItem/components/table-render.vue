<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="tools">
      <el-button class="add-btn" type="primary" @click="add">
        <el-icon><PlusIcon /></el-icon> 添加
      </el-button>
    </div>
    <el-table class="edit-table" :data="data.items" style="width: 100%" border>
      <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
      <el-table-column v-for="(item, index) in items" :key="index" :prop="item.options.key" :label="item.options.label">
      </el-table-column>
      <el-table-column label="操作" align="center" width="120" class-name="small-padding">
        <template #default="scope">
          <el-button type="primary" circle @click="edit(scope.$index, scope.row)">
            <el-icon><EditIcon /></el-icon>
          </el-button>
          <el-button type="danger" circle @click="remove(scope.$index)">
            <el-icon><DeleteIcon /></el-icon>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form-item>
  <el-dialog :title="formDialog.title" v-model="formDialog.isShow" :close-on-click-modal="false" width="750px">
    <form-render ref="formRender" @submit="save" />
  </el-dialog>
</template>

<script>
import { reactive, ref, watch, onMounted, nextTick, inject, defineAsyncComponent } from 'vue'
import { ElFormItem, ElButton, ElTable, ElTableColumn, ElDialog, ElIcon } from 'element-plus'
import { deepClone } from '@giantgo-render/utils'
import PlusIcon from '../../../icons/plus.svg'
import EditIcon from '../../../icons/edit.svg'
import DeleteIcon from '../../../icons/delete.svg'

export default {
  name: 'tableRender',
  components: {
    ElFormItem,
    ElButton,
    ElTable,
    ElTableColumn,
    ElDialog,
    ElIcon,
    PlusIcon,
    EditIcon,
    DeleteIcon,
    FormRender: defineAsyncComponent(() => import('../../index.vue'))
  },
  props: {
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
  },
  setup(props, { emit }) {
    const state = inject('state')
    const data = reactive({
      items: []
    })
    const formRender = ref(null)
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
          formRender.value && formRender.value.init(Object.assign({}, state.formDesign, { items: props.items }))
        }, 10)
      })
    }

    const edit = (index, item) => {
      formDialog.title = '编辑'
      formDialog.isShow = true
      formDialog.index = index
      nextTick(() => {
        setTimeout(() => {
          formRender.value && formRender.value.init(Object.assign({}, state.formDesign, { items: props.items }), item)
        }, 10)
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
      data.items = deepClone(props.modelValue)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    return {
      data,
      formRender,
      formDialog,
      add,
      edit,
      remove,
      save
    }
  }
}
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
