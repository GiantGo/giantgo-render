<template>
  <el-form label-position="top">
    <component
      v-for="(value, name) in formItemOptions"
      :key="name"
      :is="name + 'Option'"
      v-model="formItemOptions[name]"
    >
    </component>
  </el-form>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'formItemOption',
  props: {},
  setup() {
    const store = useStore()

    return {
      formItemOptions: computed(() => store.getters.formItemOptions)
    }
  }
}
</script>

<style lang="scss" scoped></style>
