<template>
  <div class="admin-article-box">
    <div class="other">
      <label for="title">
        <input
          id="title"
          type="text"
          placeholder="title">
      </label>
      <label for="cover">
        <input
          id="cover"
          type="text"
          placeholder="cover">
      </label>
    </div>
    <div class="content">
      <textarea
        ref="text"
        v-model="content"
        class="markdown-text"
        placeholder="编辑内容"
        @input="updateMark"/>
      <div 
        ref="view"
        class="markdown-body"
        v-html="mark"/>
    </div>
  </div>
</template>

<script>
import md from '@/assets/markdown.js'

export default {
  data() {
    return {
      mark: '',
      content: ''
    }
  },
  methods: {
    updateMark () {
      this.mark = md.render(this.content)
      this.syncScroll()
    },
    syncScroll () {
      let { scrollTop, scrollHeight, clientHeight } = this.$refs.text
      this.$refs.view.scrollTop = ((scrollTop + clientHeight) / scrollHeight) * this.$refs.view.scrollHeight - clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-article-box {
  display: flex;
  flex-direction: column;
  .other {
    input {
      outline: none;
    }
  }
  .content {
    height: 100%;
    display: flex;
    .markdown-text {
      height: 100%;
      min-width: 500px;
      padding: 10px;
      resize: none;
      outline: none;
    }
    .markdown-body {
      height: 100%;
      width: 100%;
      padding: 10px;
      overflow: auto;
    }
  }
}
</style>
