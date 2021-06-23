<template>
  <div class="form-operator">
    <div>
      <el-tooltip class="item" effect="dark" content="预览" placement="bottom">
        <i class="icon el-icon-video-play" @click="preview" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="编辑JSON" placement="bottom">
        <svg-icon name="json" class-name="icon" @click="editCode"></svg-icon>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="清空" placement="bottom">
        <i class="icon el-icon-delete" @click="clear" />
      </el-tooltip>
      <el-divider direction="vertical"></el-divider>
      <el-tooltip class="item" effect="dark" content="后退" placement="bottom">
        <i class="icon el-icon-refresh-left" @click="revoke" :class="{ disabled: current <= 0 }" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="前进" placement="bottom">
        <i class="icon el-icon-refresh-right" @click="forward" :class="{ disabled: current >= cached.length - 1 }" />
      </el-tooltip>
    </div>
    <el-dialog title="预览" v-model="previewDialog" destroy-on-close width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
    <el-dialog :title="codeDialog.title" v-model="codeDialog.isShow" width="750px">
      <div class="json-box">
        <code-mirror v-model="code" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="codeDialog.isShow = false">取 消</el-button>
          <el-button type="primary" @click="saveCode">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, nextTick, inject, reactive, computed } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

export default {
  components: { SvgIcon },
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
    const init = inject('init')

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

    const editCode = () => {
      codeDialog.title = '查看JSON'
      codeDialog.isShow = true
      nextTick(() => {
        code.value = JSON.stringify(state.formDesign, null, '\t')
      })
    }

    const saveCode = () => {
      try {
        init(JSON.parse(code.value))
      } catch (e) {
        return ElMessage.error('数据格式不正确')
      }
      codeDialog.isShow = false
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
      editCode,
      saveCode,
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

  .icon {
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }

  .icon.disabled {
    color: $disabled;
    cursor: not-allowed;
  }

  .icon + .icon {
    margin-left: 10px;
  }
}
</style>
