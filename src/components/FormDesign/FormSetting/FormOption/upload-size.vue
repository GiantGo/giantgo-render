<template>
  <el-form-item label="打开时文字描述：">
    <el-input type="text" v-model.number="size" @input="update">
      <template #append>
        <el-select v-model="unit" :style="{ width: '70px' }" @change="update">
          <el-option label="KB" value="KB" />
          <el-option label="MB" value="MB" />
          <el-option label="GB" value="GB" />
        </el-select>
      </template>
    </el-input>
  </el-form-item>
</template>

<script>
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'uploadSizeOption',
  components: {},
  props: {
    modelValue: String
  },
  setup(props, { emit }) {
    const size = ref(0)
    const unit = ref('KB')

    const setInternal = () => {
      size.value = parseFloat(props.modelValue)
      unit.value = props.modelValue.substr(props.modelValue.length - 2)
    }

    watch(() => props.modelValue, setInternal)
    onMounted(setInternal)

    const update = () => {
      emit('update:modelValue', size.value + unit.value)
    }

    return {
      size,
      unit,
      update
    }
  }
}
</script>

<style lang="scss" scoped></style>
