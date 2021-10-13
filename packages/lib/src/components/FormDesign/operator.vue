<template>
  <div class="form-operator">
    <el-tooltip effect="dark" content="预览" placement="bottom">
      <i class="icon el-icon-video-play" @click="preview" />
    </el-tooltip>
    <el-tooltip effect="dark" content="编辑JSON" placement="bottom">
      <i class="icon">
        <JsonIcon @click="editJson"></JsonIcon>
      </i>
    </el-tooltip>
    <el-tooltip effect="dark" content="清空" placement="bottom">
      <i class="icon el-icon-delete" @click="clear" />
    </el-tooltip>
    <el-divider direction="vertical"></el-divider>
    <el-tooltip effect="dark" content="后退" placement="bottom">
      <i class="icon el-icon-refresh-left" @click="revoke" :class="{ disabled: current <= 0 }" />
    </el-tooltip>
    <el-tooltip effect="dark" content="前进" placement="bottom">
      <i class="icon el-icon-refresh-right" @click="forward" :class="{ disabled: current >= cached.length - 1 }" />
    </el-tooltip>
    <el-dialog title="预览" v-model="previewDialog" destroy-on-close width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
    <el-dialog :title="jsonDialog.title" v-model="jsonDialog.isShow" width="750px">
      <div class="json-box">
        <code-mirror v-model="jsonDialog.code" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="jsonDialog.isShow = false">取消</el-button>
          <el-button type="primary" @click="saveJson">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog :title="resultDialog.title" v-model="resultDialog.isShow" width="750px">
      <div class="json-box">
        <code-mirror v-model="resultDialog.code" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="resultDialog.isShow = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { ref, nextTick, inject, reactive, computed } from 'vue'
import { ElTooltip, ElDialog, ElButton, ElDivider } from 'element-plus'
import CodeMirror from '../CodeMirror/index.vue'
import { deepClone } from '../../utils'
import { ElMessage } from 'element-plus'
import FormRender from '../FormRender/index.vue'
import JsonIcon from '../../icons/json.svg'

export default {
  components: { ElTooltip, ElDialog, ElButton, ElDivider, CodeMirror, FormRender, JsonIcon },
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
      nextTick(() => {
        resultDialog.code = JSON.stringify(result, null, '\t')
      })
    }

    const editJson = () => {
      jsonDialog.title = '查看JSON'
      jsonDialog.isShow = true
      nextTick(() => {
        jsonDialog.code = JSON.stringify(state.formDesign, null, '\t')
      })
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
