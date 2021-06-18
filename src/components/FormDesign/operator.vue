<template>
  <div class="form-operator">
    <div>
      <el-tooltip class="item" effect="dark" content="预览" placement="top">
        <i class="el-icon-video-play" @click="preview" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="查看JSON" placement="top">
        <i class="el-icon-view" @click="json" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="清空" placement="top">
        <i class="el-icon-delete" @click="clear" />
      </el-tooltip>
      <el-divider direction="vertical"></el-divider>
      <el-tooltip class="item" effect="dark" content="后退" placement="top">
        <i class="el-icon-refresh-left" @click="revoke" :class="{ disabled: current <= 0 }" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="前进" placement="top">
        <i class="el-icon-refresh-right" @click="forward" :class="{ disabled: current >= cached.length - 1 }" />
      </el-tooltip>
    </div>
    <el-dialog title="预览" v-model="previewDialog" destroy-on-close width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
    <el-dialog :title="codeDialog.title" v-model="codeDialog.isShow" width="750px">
      <div class="json-box">
        <code-mirror v-model="code" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ref, nextTick, inject, reactive, computed } from 'vue'

export default {
  components: {},
  setup() {
    const formRender = ref(null)
    const previewDialog = ref(false)
    const codeDialog = reactive({
      title: '',
      isShow: false
    })
    const code = ref('')
    const state = inject('state')
    const clear = inject('clear')
    const revoke = inject('revoke')
    const forward = inject('forward')

    const preview = () => {
      previewDialog.value = true
      nextTick(() => {
        formRender.value && formRender.value.init(state.formDesign)
      })
    }

    const submit = (result) => {
      codeDialog.title = '获取数据'
      codeDialog.isShow = true
      nextTick(() => {
        code.value = JSON.stringify(result, null, '\t')
      })
    }

    const json = () => {
      codeDialog.title = '查看JSON'
      codeDialog.isShow = true
      nextTick(() => {
        code.value = JSON.stringify(state.formDesign, null, '\t')
      })
    }

    return {
      previewDialog,
      codeDialog,
      code,
      clear: () => clear(),
      revoke,
      forward,
      preview,
      submit,
      json,
      formRender,
      cached: computed(() => state.cached),
      current: computed(() => state.current)
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

  i.disabled {
    color: $disabled;
    cursor: not-allowed;
  }

  i + i {
    margin-left: 10px;
  }
}
</style>
