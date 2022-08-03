<template>
  <el-button type="primary" plain @click="showRemote" style="width: 88%">设置</el-button>
  <el-dialog title="数据源" v-model="remoteDialog" width="750px">
    <el-form ref="formRef" :model="form" label-width="0px">
      <el-tabs v-model="tabsValue" type="card" editable @edit="handleEdit">
        <el-tab-pane
          v-for="(remote, index) in form.remotes"
          :key="remote.uuid"
          :label="remote.title || '未命名'"
          :name="remote.uuid"
        >
          <el-form-item
            :prop="'remotes.' + index + '.title'"
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
            :prop="'remotes.' + index + '.url'"
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

export default {
  name: 'remotesOption',
  components: { ElDialog, CodeMirror },
  props: {
    modelValue: Array
  },
  setup(props, { emit }) {
    const form = reactive({
      remotes: []
    })
    const formRef = ref(null)
    const tabsValue = ref('')
    const remoteDialog = ref(false)

    const showRemote = () => {
      remoteDialog.value = true
      form.remotes = deepClone(props.modelValue)
      if (form.remotes && form.remotes.length) {
        tabsValue.value = form.remotes[0].uuid
      }
    }

    const setRemote = () => {
      emit('update:modelValue', form.remotes)
      remoteDialog.value = false
    }

    const handleEdit = (target, action) => {
      if (action === 'add') {
        const newRemote = {
          uuid: 'remote_' + uuid(8),
          title: '',
          url: '',
          method: 'get',
          config: '' + uuid(8)
        }
        form.remotes.push(newRemote)
        tabsValue.value = newRemote.uuid
      } else if (action === 'remove') {
        if (tabsValue.value === target) {
          const index = form.remotes.findIndex((r) => r.uuid === target)
          const next = form.remotes[index + 1] || form.remotes[index - 1]
          if (next) {
            tabsValue.value = next.uuid
          }
        }

        form.remotes = form.remotes.filter((tab) => tab.uuid !== target)
      }
    }

    const testRequest = () => {
      formRef.value.validate((valid, error) => {
        if (valid) {
          console.log(form.remotes)
        } else {
          console.log(error)
        }
      })
    }

    return {
      form,
      formRef,
      tabsValue,
      remoteDialog,
      showRemote,
      setRemote,
      handleEdit,
      testRequest
    }
  }
}
</script>

<style lang="scss" scoped></style>
