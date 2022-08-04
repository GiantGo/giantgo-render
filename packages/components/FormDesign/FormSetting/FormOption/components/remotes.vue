<template>
  <el-button type="primary" plain @click="showRemote" style="width: 88%">设置</el-button>
  <el-dialog title="数据源" v-model="remoteDialog" width="750px" :show-close="false">
    <el-form ref="formRef" :model="form" label-width="0px">
      <el-tabs v-model="remoteTabsValue" type="card" editable @edit="editRemote">
        <el-tab-pane
          v-for="(remote, remoteIndex) in form.remotes"
          :key="remote.uuid"
          :label="remote.title || '未命名'"
          :name="remote.uuid"
        >
          <el-form-item
            :prop="'remotes.' + remoteIndex + '.title'"
            :rules="{
              required: true,
              message: '请输入名称',
              trigger: 'blur'
            }"
            style="margin-bottom: 18px"
          >
            <el-input v-model="remote.title" placeholder="请输入名称" />
          </el-form-item>
          <el-form-item
            :prop="'remotes.' + remoteIndex + '.url'"
            :rules="{
              required: true,
              message: '请输入地址',
              trigger: 'blur'
            }"
            style="margin-bottom: 18px"
          >
            <el-input v-model="remote.url" placeholder="请输入地址">
              <template #prepend>
                <el-select v-model="remote.method" style="width: 100px">
                  <el-option label="GET" value="get" />
                  <el-option label="POST" value="post" />
                  <el-option label="PUT" value="put" />
                  <el-option label="DELETE" value="delete" />
                </el-select>
              </template>
              <template #append>
                <el-button @click="testRequest">发送</el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-tabs v-model="remote.tabsValue">
            <el-tab-pane
              :label="'请求头部Headers' + (remote.headers.length ? '（' + remote.headers.length + '）' : '')"
              name="headers"
            >
              <el-row class="option-row" v-for="(header, headerIndex) in remote.headers" :key="headerIndex" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="header.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="header.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(remoteIndex, 'headers', headerIndex)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(remoteIndex, 'headers')">增加头部</el-button>
            </el-tab-pane>
            <el-tab-pane
              :label="'请求参数Params' + (remote.params.length ? '（' + remote.params.length + '）' : '')"
              name="params"
            >
              <el-row class="option-row" v-for="(param, paramIndex) in remote.params" :key="paramIndex" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="param.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="param.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(remoteIndex, 'params', paramIndex)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(remoteIndex, 'params')">增加参数</el-button>
            </el-tab-pane>
            <el-tab-pane
              :label="'请求数据Data' + (remote.data.length ? '（' + remote.data.length + '）' : '')"
              name="data"
            >
              <el-row class="option-row" v-for="(data, dataIndex) in remote.data" :key="dataIndex" :gutter="5">
                <el-col :span="11">
                  <el-input v-model="data.key" placeholder="Key" />
                </el-col>
                <el-col :span="11">
                  <el-input v-model="data.value" placeholder="Value" />
                </el-col>
                <el-col :span="2" class="btn-del">
                  <el-icon class="el-icon-delete" @click="removeKeyValue(remoteIndex, 'data', dataIndex)">
                    <DeleteIcon />
                  </el-icon>
                </el-col>
              </el-row>
              <el-button link type="primary" @click="addKeyValue(remoteIndex, 'data')">增加数据</el-button>
            </el-tab-pane>
          </el-tabs>
          <el-collapse v-model="remote.collapseValue" accordion>
            <el-collapse-item title="处理请求数据" name="request">
              <div class="form-design-json-box">
                <div class="codeMirror-tip">(data, headers) => {</div>
                <code-mirror v-model="remote.transformRequest" />
                <div class="codeMirror-tip">}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="处理响应数据" name="response">
              <div class="form-design-json-box">
                <div class="codeMirror-tip">(data) => {</div>
                <code-mirror v-model="remote.transformResponse" />
                <div class="codeMirror-tip">}</div>
              </div>
            </el-collapse-item>
            <el-collapse-item title="错误处理" name="error">
              <div class="form-design-json-box">
                <div class="codeMirror-tip">(error) => {</div>
                <code-mirror v-model="remote.errorHandler" />
                <div class="codeMirror-tip">}</div>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div class="form-design-json-box">
            <div class="codeMirror-tip">响应数据</div>
            <code-mirror v-model="remote.result" />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="remoteDialog = false">取消</el-button>
        <el-button type="primary" @click="setRemote">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { ref, reactive } from 'vue'
import { ElDialog } from 'element-plus'
import { CodeMirror } from '@giantgo-render/components'
import { uuid, deepClone } from '@giantgo-render/utils'
import DeleteIcon from '../../../../icons/delete.svg'
import axios from 'axios'

export default {
  name: 'remotesOption',
  components: { ElDialog, CodeMirror, DeleteIcon },
  props: {
    modelValue: Array
  },
  setup(props, { emit }) {
    const form = reactive({
      remotes: []
    })
    const formRef = ref(null)
    const remoteTabsValue = ref('')
    const remoteDialog = ref(false)

    const showRemote = () => {
      remoteDialog.value = true
      form.remotes = deepClone(
        props.modelValue.map((r) => {
          return {
            ...r,
            tabsValue: 'headers',
            collapseValue: '',
            result: ''
          }
        })
      )
      if (form.remotes && form.remotes.length) {
        remoteTabsValue.value = form.remotes[0].uuid
      }
    }

    const setRemote = () => {
      formRef.value.validate((valid, error) => {
        if (valid) {
          emit(
            'update:modelValue',
            form.remotes.map((r) => {
              return {
                uuid: r.uuid,
                title: r.title,
                url: r.url,
                method: r.method,
                headers: r.headers,
                params: r.params,
                data: r.data,
                requestHandler: r.requestHandler,
                responseHandler: r.responseHandler,
                errorHandler: r.errorHandler
              }
            })
          )
          remoteDialog.value = false
        } else {
          console.log(error)
        }
      })
    }

    const editRemote = (target, action) => {
      if (action === 'add') {
        const newRemote = {
          uuid: 'remote_' + uuid(8),
          title: '',
          url: '',
          method: 'get',
          headers: [],
          params: [],
          data: [],
          transformRequest: 'return data;',
          transformResponse: 'return data;',
          errorHandler: 'return Promise.reject(error);',
          tabsValue: 'headers',
          collapseValue: '',
          result: ''
        }
        form.remotes.push(newRemote)
        remoteTabsValue.value = newRemote.uuid
      } else if (action === 'remove') {
        if (remoteTabsValue.value === target) {
          const index = form.remotes.findIndex((r) => r.uuid === target)
          const next = form.remotes[index + 1] || form.remotes[index - 1]
          if (next) {
            remoteTabsValue.value = next.uuid
          }
        }

        form.remotes = form.remotes.filter((tab) => tab.uuid !== target)
      }
    }

    const addKeyValue = (remoteIndex, attr) => {
      form.remotes[remoteIndex][attr].push({ key: '', value: '' })
    }

    const removeKeyValue = (remoteIndex, attr, targetIndex) => {
      form.remotes[remoteIndex][attr].splice(targetIndex, 1)
    }

    const testRequest = () => {
      const index = form.remotes.findIndex((r) => r.uuid === remoteTabsValue.value)
      const remote = form.remotes[index]

      formRef.value.validateField('remotes.' + index + '.url').then(() => {
        const headers = {}
        const params = {}
        const data = {}

        remote.headers.forEach(({ key, value }) => {
          if (key && value) {
            headers[key] = value
          }
        })

        remote.params.forEach(({ key, value }) => {
          if (key && value) {
            params[key] = value
          }
        })

        remote.data.forEach(({ key, value }) => {
          if (key && value) {
            data[key] = value
          }
        })

        axios({
          method: remote.method,
          url: remote.url,
          headers,
          params,
          data,
          transformRequest: [new Function('data', 'headers', remote.transformRequest)],
          transformResponse: [new Function('data', remote.transformResponse)]
        })
      })
    }

    return {
      form,
      formRef,
      remoteTabsValue,
      remoteDialog,
      showRemote,
      setRemote,
      editRemote,
      addKeyValue,
      removeKeyValue,
      testRequest
    }
  }
}
</script>

<style lang="scss" scoped></style>
