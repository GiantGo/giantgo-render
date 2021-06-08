<template>
  <el-empty v-if="formDesign.items.length === 0" class="empty" description="从左侧选择控件添加"></el-empty>
  <form-builder v-show="mode === 'design'" />
  <form-render ref="formRender" :config="formDesign" v-show="mode === 'render'" />
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {},
  setup() {
    const store = useStore()
    const formRender = ref(null)

    onMounted(() => {
      formRender.value.init()
    })

    return {
      formRender,
      mode: computed(() => store.getters.mode),
      formDesign: computed(() => store.getters.formDesign)
    }
  }
}
</script>

<style lang="scss"></style>
