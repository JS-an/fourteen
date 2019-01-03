<template>
  <section class="container">
    <transition :name="transitionName">
      <nuxt/>
    </transition>
  </section>
</template>

<script>

export default {
  data() {
    return {
      transitionName: 'view'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (!from || toDepth === fromDepth) {
        this.transitionName = 'fade'
      } else if (toDepth < fromDepth) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },
  mounted() {
  this.$axios.get('isSignIn')
    .then(res => {
      if (typeof(res.data) === 'string') {
        console.log('未登录')
      } else {
        this.$store.state.user = res.data
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scope>

.container{
  height: calc(100vh - 61px);
  overflow: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform .3s;
}

.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100vw);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: transform .3s;
}

.slide-left-enter, .slide-left-leave-to {
  transform: translateX(-100vw);
}

</style>
