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
    <el-dialog title="预览" v-model="dialog" destroy-on-close :close-on-click-modal="false" width="750px">
      <form-render ref="formRender" @submit="submit" />
    </el-dialog>
  </div>
</template>

<script>
import { computed, ref, nextTick, toRaw } from 'vue'
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
        formRender.value && formRender.value.init(store.getters.formDesign)
      })
    }

    const submit = (result) => {
      console.log(toRaw(result))
    }

    return {
      dialog,
      clear,
      preview,
      submit,
      formRender,
      formDesign: computed(() => store.getters.formDesign)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.form-operator {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 5px 0;
  height: 45px;
  padding: 0 10px;
  border: 1px solid $divider-color;
  color: $primary-text;
  font-size: 16px;

  i {
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }

  i + i {
    margin-left: 10px;
  }
}
</style>
