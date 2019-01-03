<template>
  <div class="admin-box">
    <btn class="btn"/>
    <nuxt-child class="item"/>
  </div>
</template>
<script>
import btn from '@/components/btn'

export default {
  components: { btn }  
}
</script>

<style lang="scss" scoped>
.admin-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  .item {
    height: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}
</style>
