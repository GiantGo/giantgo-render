<template>
  <div class="form-operator">
    <div>
      <el-tooltip class="item" effect="dark" content="预览" placement="top">
        <i class="el-icon-view" @click="preview" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="清空" placement="top">
        <i class="el-icon-delete" @click="clear" />
      </el-tooltip>
    </div>
    <el-dialog title="预览" v-model="previewDialog" destroy-on-close width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
    <el-dialog title="获取数据" v-model="codeDialog" width="750px">
      <div class="json-box">
        <code-mirror v-model="code" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ref, nextTick, inject } from 'vue'

export default {
  components: {},
  setup() {
    const formRender = ref(null)
    const previewDialog = ref(false)
    const codeDialog = ref(false)
    const code = ref('')
    const state = inject('state')
    const clear = inject('clear')

    const preview = () => {
      previewDialog.value = true
      nextTick(() => {
        formRender.value && formRender.value.init(state.formDesign)
      })
    }

    const submit = (result) => {
      codeDialog.value = true
      nextTick(() => {
        code.value = JSON.stringify(result, null, '\t')
      })
    }

    return {
      previewDialog,
      codeDialog,
      code,
      clear,
      preview,
      submit,
      formRender
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-operator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 5px 0;
  height: 45px;
  padding: 0 10px;
  border: 1px solid $divider-color;
  color: $primary-text;
  font-size: 16px;

  i {
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }

  i + i {
    margin-left: 10px;
  }
}
</style>
