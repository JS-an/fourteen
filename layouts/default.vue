<template>
  <div>
    <navmenu/>
    <nuxt/>
  </div>
</template>

<script>
import navmenu from '../components/nav'
  export default {
    components: { navmenu }
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

</style>
