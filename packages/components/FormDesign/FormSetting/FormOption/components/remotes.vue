<template>
  <el-button type="primary" plain @click="showRemote" style="width: 88%">设置</el-button>
  <el-dialog title="数据源" v-model="remoteDialog" width="750px" :show-close="false">
    <template #header>
      设置数据源
      <div style="float: right">
        <el-button type="primary" @click="saveRemote">保存</el-button>
        <el-button @click="remoteDialog = false">取消</el-button>
      </div>
    </template>
    <el-form ref="formRef" :model="form" label-width="0px">
      <el-tabs v-model="remoteTabsValue" type="card" editable @edit="editRemote">
        <el-tab-pane v-for="(value, uuid) in form.remotes" :key="uuid" :label="value.title || '未命名'" :name="uuid">
          <el-form-item
            :prop="'remotes.' + uuid + '.title'"
            :rules="{
              required: true,
              message: '请输入名称',
              trigger: 'blur'
            }"
            style="margin-bottom: 18px"
          >
            <el-input v-model="value.title" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item
            :prop="'remotes.' + uuid + '.url'"
            :rules="{
              required: true,
              message: '请输入地址',
              trigger: 'blur'
            }"
            style="margin-bottom: 18px"
          >
            <el-input v-model="value.url" placeholder="请输入地址">
              <template #prepend>
                <el-select v-model="value.method" style="width: 100px">
                  <el-option label="GET" value="get" />
                  <el-option label="POST" value="post" />
                  <el-option label="PUT" value="put" />
                  <el-option label="DELETE" value="delete" />
                </el-select>
              </template>
              <template #append>
                <el-button @click="testRequest" :loading="form.loading">测试请求</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-tabs v-model="form.remoteTabs[uuid]">
            <el-tab-pane
              :label="'请求头部Headers' + (value.headers.length ? '（' + value.headers.length + '）' : '')"
              name="headers"
            >
              <el-row class="option-row" v-for="(header, index) in value.headers" :key="index" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="header.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="header.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(uuid, 'headers', index)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(uuid, 'headers')">增加头部</el-button>
            </el-tab-pane>
            <el-tab-pane
              :label="'请求参数Params' + (value.params.length ? '（' + value.params.length + '）' : '')"
              name="params"
            >
              <el-row class="option-row" v-for="(param, index) in value.params" :key="index" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="param.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="param.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(uuid, 'params', index)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(uuid, 'params')">增加参数</el-button>
            </el-tab-pane>
            <el-tab-pane
              :label="'请求数据Data' + (value.data.length ? '（' + value.data.length + '）' : '')"
              name="data"
            >
              <el-row class="option-row" v-for="(data, index) in value.data" :key="index" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="data.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="data.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(uuid, 'data', index)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(uuid, 'data')">增加数据</el-button>
            </el-tab-pane>
          </el-tabs>
          <div class="form-design-code-editor" v-loading="form.loading">
            <div class="code-editor-tip">响应数据</div>
            <code-editor v-model="form.remoteResults[uuid]" lang="json" />
          </div>
          <el-collapse v-model="form.remoteCollapses[uuid]">
            <el-collapse-item title="处理请求数据" name="request">
              <div class="form-design-code-editor">
                <div class="code-editor-tip">(config) => {</div>
                <code-editor v-model="value.requestHandler" lang="javascript" />
                <div class="code-editor-tip">}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="处理响应数据" name="response">
              <div class="form-design-code-editor">
                <div class="code-editor-tip">(response) => {</div>
                <code-editor v-model="value.responseHandler" lang="javascript" />
                <div class="code-editor-tip">}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="错误处理" name="error">
              <div class="form-design-code-editor">
                <div class="code-editor-tip">(error) => {</div>
                <code-editor v-model="value.errorHandler" lang="javascript" />
                <div class="code-editor-tip">}</div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </el-dialog>
</template>

<script>
import { ref, reactive } from 'vue'
import { ElDialog, ElMessage } from 'element-plus'
import { CodeEditor } from '@giantgo-render/components'
import { uuid, deepClone, isEmptyObject, createRequest } from '@giantgo-render/utils'
import DeleteIcon from '../../../../icons/delete.svg'

export default {
  name: 'remotesOption',
  components: { ElDialog, CodeEditor, DeleteIcon },
  props: {
    modelValue: Object
  },
  setup(props, { emit }) {
    const form = reactive({
      remotes: {},
      remoteTabs: {},
      remoteCollapses: {},
      remoteResults: {},
      loading: false
    })
    const formRef = ref(null)
    const remoteTabsValue = ref('')
    const remoteDialog = ref(false)

    const showRemote = () => {
      remoteDialog.value = true
      form.remotes = deepClone(props.modelValue)
      form.remoteTabs = {}
      form.remoteCollapses = {}
      form.remoteResults = {}
      if (form.remotes && !isEmptyObject(form.remotes)) {
        const uuids = Object.keys(form.remotes)
        remoteTabsValue.value = uuids[0]
        uuids.forEach((uuid) => {
          form.remoteTabs[uuid] = 'headers'
          form.remoteCollapses[uuid] = ['request', 'response', 'error']
          form.remoteResults[uuid] = ''
        })
      }
    }

    const saveRemote = () => {
      formRef.value.validate((valid, error) => {
        if (valid) {
          emit('update:modelValue', form.remotes)
          remoteDialog.value = false
        } else {
          const firstError = Object.keys(error)[0]
          remoteTabsValue.value = firstError.split('.')[1]
        }
      })
    }

    const editRemote = (target, action) => {
      if (action === 'add') {
        const newUuid = 'remote_' + uuid(8)
        remoteTabsValue.value = newUuid
        form.remotes[newUuid] = {
          title: '',
          url: '',
          method: 'get',
          headers: [],
          params: [],
          data: [],
          requestHandler: 'return config;',
          responseHandler: 'return response.data;',
          errorHandler: 'return Promise.reject(error);'
        }
        form.remoteTabs[newUuid] = 'headers'
        form.remoteCollapses[newUuid] = ['request', 'response', 'error']
        form.remoteResults[newUuid] = ''
      } else if (action === 'remove') {
        if (remoteTabsValue.value === target) {
          const uuids = Object.keys(form.remotes)
          const index = uuids.findIndex((uuid) => uuid === target)
          const next = uuids[index + 1] || uuids[index - 1]
          if (next) {
            remoteTabsValue.value = next
          }
        }

        delete form.remotes[target]
        delete form.remoteTabs[target]
        delete form.remoteCollapses[target]
        delete form.remoteResults[target]
      }
    }

    const addKeyValue = (uuid, attr) => {
      form.remotes[uuid][attr].push({ key: '', value: '' })
    }

    const removeKeyValue = (uuid, attr, targetIndex) => {
      form.remotes[uuid][attr].splice(targetIndex, 1)
    }

    const testRequest = () => {
      formRef.value.validateField('remotes.' + remoteTabsValue.value + '.url').then(() => {
        form.loading = true
        createRequest(form.remotes[remoteTabsValue.value])
          .then((data) => {
            form.remoteResults[remoteTabsValue.value] = JSON.stringify(data, null, '\t')
            form.loading = false
            ElMessage.success('请求成功')
          })
          .catch((error) => {
            form.remoteResults[remoteTabsValue.value] = ''
            form.loading = false
            ElMessage.error(error.message)
          })
      })
    }

    return {
      form,
      formRef,
      remoteTabsValue,
      remoteDialog,
      showRemote,
      saveRemote,
      editRemote,
      addKeyValue,
      removeKeyValue,
      testRequest
    }
  }
}
</script>

<style lang="scss" scoped></style>
