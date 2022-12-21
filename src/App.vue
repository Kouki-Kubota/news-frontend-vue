<template>
<div>
  <div class="itemField">
    <div class="header">
      <Header
        :setResource = "setResource" 
        :searchResource = "searchResource"
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
      activeCategory: state => state.news.activeCategory,
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
      await this.$store.dispatch('news/updateCategory', category)
      this.$store.dispatch('news/getArticles')
      console.log(category)
      console.log(this.$store.state.news.activeCategory)
    },
    async searchResource(category) {
      await this.$store.dispatch('news/updateCategory', category)
      this.$store.dispatch('news/searchArticles')
      console.log(`検索${category}`)
      console.log(this.$store.state.news.activeCategory)
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