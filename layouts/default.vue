<template>
  <div class="layout">
    <navmenu/>
    <transition :name="transitionName">
      <nuxt class="nuxt"/>
    </transition>
  </div>
</template>

<script>
import navmenu from '../components/nav'
  export default {
    components: { navmenu },
    data() {
      return {
        transitionName: 'fade'
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

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f7f7f7;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  overflow: hidden;
  .nuxt {
    height: calc(100vh - 61px);
  }
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
