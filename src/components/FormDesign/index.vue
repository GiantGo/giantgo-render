<template>
  <div class="form-design-container">
    <div class="left-container">
      <left></left>
    </div>
    <div class="center-container">
      <center></center>
    </div>
    <div class="right-container">
      <right></right>
    </div>
  </div>
</template>

<script>
import left from './left.vue'
import center from './center.vue'
import right from './right.vue'

export default {
  components: { left, center, right },
  setup() {}
}
</script>

<style lang="scss">
@import '../../styles/variables.scss';
</style>
