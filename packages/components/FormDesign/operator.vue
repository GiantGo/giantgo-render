<template>
  <div class="form-operator">
    <el-tooltip effect="dark" content="预览" placement="bottom">
      <el-icon class="icon" @click="preview">
        <PlayIcon />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="编辑JSON" placement="bottom">
      <el-icon class="icon" @click="editJson">
        <JsonIcon />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="清空" placement="bottom">
      <el-icon class="icon" @click="clear">
        <DeleteIcon />
      </el-icon>
    </el-tooltip>
    <el-divider direction="vertical"></el-divider>
    <el-tooltip effect="dark" content="后退" placement="bottom">
      <el-icon class="icon" :class="{ disabled: current <= 0 }" @click="revoke">
        <RefreshLeftIcon />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="前进" placement="bottom">
      <el-icon class="icon" :class="{ disabled: current >= cached.length - 1 }" @click="forward">
        <RefreshRightIcon />
      </el-icon>
    </el-tooltip>
    <el-dialog title="预览" v-model="previewDialog" destroy-on-close append-to-body width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
    <el-dialog :title="jsonDialog.title" v-model="jsonDialog.isShow" append-to-body width="750px">
      <div class="form-design-code-editor">
        <code-editor v-model="jsonDialog.code" lang="json"/>
      </div>
      <template #footer>
        <div>
          <el-button @click="jsonDialog.isShow = false">取消</el-button>
          <el-button type="primary" @click="saveJson">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog :title="resultDialog.title" v-model="resultDialog.isShow" append-to-body width="750px">
      <div class="form-design-code-editor">
        <code-editor v-model="resultDialog.code"  lang="json"/>
      </div>
      <template #footer>
        <div>
          <el-button @click="resultDialog.isShow = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, nextTick, inject, reactive, computed } from 'vue'
import { ElTooltip, ElDialog, ElButton, ElDivider, ElMessage, ElIcon } from 'element-plus'
import { CodeEditor, FormRender } from '@giantgo-render/components'
import { deepClone } from '@giantgo-render/utils'
import JsonIcon from '../icons/json.svg'
import DeleteIcon from '../icons/delete.svg'
import PlayIcon from '../icons/play.svg'
import RefreshLeftIcon from '../icons/refresh-left.svg'
import RefreshRightIcon from '../icons/refresh-right.svg'

export default {
  components: {
    ElTooltip,
    ElDialog,
    ElButton,
    ElDivider,
    ElIcon,
    CodeEditor,
    FormRender,
    JsonIcon,
    DeleteIcon,
    PlayIcon,
    RefreshLeftIcon,
    RefreshRightIcon
  },
  setup() {
    const formRender = ref(null)
    const previewDialog = ref(false)
    const jsonDialog = reactive({
      title: '',
      isShow: false,
      code: ''
    })
    const resultDialog = reactive({
      title: '',
      isShow: false,
      code: ''
    })
    const state = inject('state')
    const clear = inject('clear')
    const revoke = inject('revoke')
    const forward = inject('forward')
    const init = inject('init')

    const preview = () => {
      previewDialog.value = true
      nextTick(() => {
        formRender.value && formRender.value.init(deepClone(state.formDesign))
      })
    }

    const submit = (result) => {
      resultDialog.title = '获取数据'
      resultDialog.isShow = true
      resultDialog.code = JSON.stringify(result, null, '\t')
    }

    const editJson = () => {
      jsonDialog.title = '查看JSON'
      jsonDialog.isShow = true
      jsonDialog.code = JSON.stringify(state.formDesign, null, '\t')
    }

    const saveJson = () => {
      try {
        init(JSON.parse(jsonDialog.code))
      } catch (e) {
        return ElMessage.error('数据格式不正确')
      }
      jsonDialog.isShow = false
    }

    return {
      previewDialog,
      jsonDialog,
      resultDialog,
      clear: () => clear(),
      revoke,
      forward,
      preview,
      submit,
      editJson,
      saveJson,
      formRender,
      cached: computed(() => state.cached),
      current: computed(() => state.current)
    }
  }
}
</script>

<style lang="scss"></style>
