<template>
<div>
  <div class="itemField">
    <div class="header">
      <Header
        :setResource = "setResource" 
        :searchResource = "searchResource"
        :updateBookmarkStatus = "updateBookmarkStatus"
      />
    </div>
    <div class="contentField">
      <Content :articles="articles"/>
    </div>
  </div>
</div>
</template>
 
<script>
import Header from './components/Header'
import Content from './components/Content'
import { mapState, mapGetters } from 'vuex'

export default {
  components: { 
    Header,
    Content,
  },
  computed: {
    ...mapState({
      activeCategory: state => state.news.activeCategory
    }),
    ...mapGetters('news', {
      articles: 'getArticlesByCategory'
    })
  },
  //action呼び出し
  created() {
    this.$store.dispatch('news/getArticles')
  },
  methods: {
    async setResource(category){
      await 
      this.$store.dispatch('news/updateCategory', category)
      console.log(this.$store.state.news.activeCategory)
      this.$store.dispatch('news/getArticles')
      console.log("artile取れてる")
      console.log(this.$store.state.bookmarkStatus)
    },
    async searchResource(keyword) {
      await 
      this.$store.dispatch('news/updateCategory', 'search')
      this.$store.dispatch('news/searchArticles', {keyword: keyword})
    },
    async updateBookmarkStatus(status){
      await
      this.$store.dispatch('news/updateBookmark', status)
    }
  }
}
</script>
<style lang="sass" scoped>
  .contentField 
    width: 100vw
    background-image: url("~@/assets/imgs/bgAulora.png")
    background-repeat: no-repeat
    background-attachment: fixed

</style>