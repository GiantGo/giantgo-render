<template>
  <el-form-item
    :label="options.label"
    :prop="path"
    :rules="[
      {
        required: true,
        message: '域名不能为空',
        trigger: 'blur'
      }
    ]"
  >
    <el-input type="text" v-model="value"></el-input>
  </el-form-item>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'inputBuilder',
  components: {},
  props: {
    path: String,
    uuid: String,
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup(props) {
    const store = useStore()

    function getValueByExpression(expression, data) {
      try {
        return Function('__withObj__', 'with(__withObj__) { return ' + expression + '; }')(data)
      } catch (e) {}
    }

    function setValueByExpression(expression, data, val) {
      try {
        Function('__withObj__', '__setVal__', 'with(__withObj__) { ' + expression + ' = __setVal__; }')(data, val)
      } catch (e) {}
    }

    return {
      value: computed({
        get() {
          getValueByExpression(props.path, store.getters.formData)
        },
        set(value) {
          debugger
          setValueByExpression(props.path, store.getters.formData, value)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
