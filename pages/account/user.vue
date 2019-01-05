<template>
  <section class="user-box">
    <div>
      {{ user.account }}
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
}
</script>

<style lang="scss" scope>

.user-box {
  color: red;
}
</style>
