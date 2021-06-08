<template>
  <div class="form-design-container">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <operator></operator>
      <form-builder />
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
import left from './left.vue'
import right from './right.vue'
import operator from './operator.vue'

export default {
  components: { left, right, operator },
  setup() {}
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
</style>
