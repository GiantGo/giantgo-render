<template>
  <el-form-item :prop="path" :label="options.label" :rules="options.rules">
    <div class="tools">
      <el-button class="add-btn" type="primary" icon="el-icon-plus" @click="add">添加</el-button>
    </div>
    <el-table class="edit-table" :data="data.items" style="width: 100%" border>
      <el-table-column type="index" width="50" label="序号" align="center"> </el-table-column>
      <el-table-column v-for="(item, index) in items" :key="index" :prop="item.options.key" :label="item.options.label">
      </el-table-column>
      <el-table-column label="操作" align="center" width="120" class-name="small-padding">
        <template #default="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="edit(scope.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="remove(scope.$index)"></el-button>
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
import { ElFormItem, ElButton, ElTable, ElTableColumn, ElDialog } from 'element-plus'
import { deepClone } from '@giantgo-render/utils'

export default {
  name: 'tableRender',
  components: {
    ElFormItem,
    ElButton,
    ElTable,
    ElTableColumn,
    ElDialog,
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
      isShow: false
    })

    const setInternal = () => {
      data.items = deepClone(props.modelValue)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    const add = () => {
      formDialog.title = '添加'
      formDialog.isShow = true
      nextTick(() => {
        formRender.value && formRender.value.init(Object.assign({}, state.formDesign, { items: props.items }))
      })
    }

    const edit = (item) => {
      formDialog.title = '编辑'
      formDialog.isShow = true
      nextTick(() => {
        formRender.value && formRender.value.init(Object.assign({}, state.formDesign, { items: props.items }), item)
      })
    }

    const remove = (index) => {
      data.items.splice(index, 1)
      emit('update:modelValue', data.items)
    }

    const save = (result) => {
      data.items.push(result)
      formDialog.isShow = false
      emit('update:modelValue', data.items)
    }

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
