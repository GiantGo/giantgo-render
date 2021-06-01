import { debounce } from '@/utils'
import { ElMessage } from 'element-plus'

const createFormDesignPlugin = (store) => {
  const save = debounce(() => {
    console.log(JSON.stringify(store.getters.formItems))
    ElMessage.success('已自动保存')
  }, 1000)
  // 当 store 初始化后调用
  store.subscribe((mutation) => {
    if (mutation.type && mutation.type.indexOf('design/UPDATE') > -1) {
      save()
    }
  })
}

export default createFormDesignPlugin
