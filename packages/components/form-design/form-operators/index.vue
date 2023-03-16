<template>
  <div class="form-operator">
    <el-tooltip effect="dark" content="预览" placement="bottom">
      <el-icon class="icon" @click="preview">
        <i-carbon-play-outline />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="编辑JSON" placement="bottom">
      <el-icon class="icon" @click="editJson">
        <i-carbon-code />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="清空" placement="bottom">
      <el-icon class="icon" @click="clear">
        <i-carbon-trash-can />
      </el-icon>
    </el-tooltip>
    <el-divider direction="vertical" />
    <el-tooltip effect="dark" content="后退" placement="bottom">
      <el-icon class="icon" :class="{ disabled: current <= 0 }" @click="revoke">
        <i-carbon-undo />
      </el-icon>
    </el-tooltip>
    <el-tooltip effect="dark" content="前进" placement="bottom">
      <el-icon class="icon" :class="{ disabled: current >= cached.length - 1 }" @click="forward">
        <i-carbon-redo />
      </el-icon>
    </el-tooltip>
    <el-dialog v-model="previewDialog" title="预览" destroy-on-close append-to-body width="750px">
      <form-render ref="formRenderRef" @submit="submit" />
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="submit"> 获取数据 </el-button>
          <el-button @click="reset">重置表单</el-button>
          <el-button @click="resultDialog.isShow = false">关闭</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="jsonDialog.isShow" :title="jsonDialog.title" append-to-body width="750px">
      <div class="form-design-code-editor">
        <code-editor v-model="jsonDialog.code" lang="json" />
      </div>
      <template #footer>
        <div>
          <el-button @click="jsonDialog.isShow = false">取消</el-button>
          <el-button type="primary" @click="saveJson">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog v-model="resultDialog.isShow" :title="resultDialog.title" append-to-body width="750px">
      <div class="form-design-code-editor">
        <code-editor v-model="resultDialog.code" lang="json" />
      </div>
      <template #footer>
        <div>
          <el-button @click="resultDialog.isShow = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed, inject, nextTick, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'

const formRenderRef = ref(null)
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

const cached = computed(() => state.cached)
const current = computed(() => state.current)

const preview = () => {
  previewDialog.value = true
  nextTick(() => {
    formRenderRef.value && formRenderRef.value.init(cloneDeep(state.formDesign))
  })
}

const submit = () => {
  formRenderRef.value.submit().then((result) => {
    resultDialog.title = '获取数据'
    resultDialog.isShow = true
    resultDialog.code = JSON.stringify(result, null, '\t')
  })
}

const reset = () => {
  formRenderRef.value.reset()
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
</script>

<style lang="scss"></style>
