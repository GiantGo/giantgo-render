<template>
  <el-row class="option-row">
    <el-col :span="24"> 上：<el-input-number v-model="data.top" @input="emitChange" size="small" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 右：<el-input-number v-model="data.right" @input="emitChange" size="small" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 下：<el-input-number v-model="data.down" @input="emitChange" size="small" /> </el-col>
  </el-row>
  <el-row class="option-row">
    <el-col :span="24"> 左：<el-input-number v-model="data.left" @input="emitChange" size="small" /> </el-col>
  </el-row>
</template>

<script>
import { reactive, onMounted, watch } from 'vue'
import { ElRow, ElCol, ElInputNumber } from 'element-plus'

export default {
  name: 'paddingOption',
  components: { ElRow, ElCol, ElInputNumber },
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const data = reactive({
      top: 0,
      right: 0,
      down: 0,
      left: 0
    })

    const setInternal = () => {
      const [top, right, down, left] = props.modelValue.split(' ')
      data.top = parseFloat(top)
      data.right = parseFloat(right)
      data.down = parseFloat(down)
      data.left = parseFloat(left)
    }

    onMounted(setInternal)
    watch(() => props.modelValue, setInternal)

    const emitChange = () => {
      emit('update:modelValue', `${data.top || 0}px ${data.right || 0}px ${data.down || 0}px ${data.left || 0}px`)
    }

    return { data, emitChange }
  }
}
</script>

<style lang="scss" scoped></style>
