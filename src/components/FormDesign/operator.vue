<template>
  <div class="form-operator">
    <div>
      <el-tooltip class="item" effect="dark" content="预览" placement="top">
        <i class="el-icon-view" @click="preview" />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="清空" placement="top">
        <i class="el-icon-delete" @click="clear" />
      </el-tooltip>
    </div>
    <el-dialog v-model="dialog">
      <form-render ref="formRender" />
    </el-dialog>
  </div>
</template>

<script>
import { computed, ref, nextTick } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {},
  setup() {
    const store = useStore()
    const formRender = ref(null)
    const dialog = ref(false)

    const clear = () => {
      store.dispatch('design/init')
    }

    const preview = () => {
      dialog.value = true
      nextTick(() => {
        formRender.value.init(store.getters.formDesign)
      })
    }

    return {
      dialog,
      clear,
      preview,
      formRender,
      formDesign: computed(() => store.getters.formDesign)
    }
  }
}
</script>

<style lang="scss"></style>
