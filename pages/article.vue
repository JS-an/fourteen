<template>
  <section class="article-box">
    <ul class="article-list">
      <li
        v-for="(article, i) in articleList"
        :key="i"
        :style="`backgroundImage: url(${img})`"
        class="article">
        <h2>{{ article }}</h2>
      </li>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      articleList: [1, 2, 3, 4],
      img: 'https://p3a.pstatp.com/weili/l/198355711650168848.jpg'
    }
  },
}
</script>

<style lang="scss" scope>

.article-box {
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  .article-list {
    list-style: none;
    padding: 0;
    .article {
      min-width: 400px;
      min-height: 200px;
      margin: 20px;
      border: 1px solid black;
    }
  }
}

</style>
