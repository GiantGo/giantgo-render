<template>
  <div class="form-operator">
    <div>
      <el-tooltip class="item" effect="dark" content="清空" placement="top">
        <i class="el-icon-delete" @click="clear" />
      </el-tooltip>
    </div>
    <div class="fr">
      <el-switch
        v-model="mode"
        active-color="#13ce66"
        inactive-color="#409eff"
        active-text="预览"
        inactive-text="编辑"
        active-value="preview"
        inactive-value="design"
      >
      </el-switch>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {},
  setup() {
    const store = useStore()

    const clear = () => {
      store.dispatch('design/init')
    }

    return {
      clear,
      mode: computed({
        get() {
          return store.getters.mode
        },
        set(value) {
          store.dispatch('design/setMode', value)
        }
      })
    }
  }
}
</script>

<style lang="scss"></style>
