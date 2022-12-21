<template>
  <div class="itemField">
    <v-card
      class="mx-auto card"
      max-width="400"
      height="400"
      color="rgb(255, 0, 0, 0)"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        :src="article.urlToImage"
      >

      </v-img>
      <v-card-title>{{ article.title }}</v-card-title>

      <v-card-actions>
        <v-icon
          @click = "toggleBookmark(); onChangeBookmark(article.id)"
          v-if="this.bookmark==false"
        >
            mdi-bookmark-outline
        </v-icon>
        <v-icon
          @click = "toggleBookmark(); onChangeBookmark(article.id)"
          v-else
        >
            mdi-bookmark
        </v-icon>

        <v-btn
          color="orange"
          text
          :source="article.url"
        >
          <a :href="`${article.url}`">
            Explore
          </a>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'Item',
  data: function() {
    return {
      bookmark: false
    }
  },
  props: {
    article: Object
  },
  methods: {
    onChangeBookmark(id){
      this.$store.dispatch('news/updateBookmark', id)
    },
    toggleBookmark(){
      this.bookmark = !this.bookmark
      console.log(this.bookmark)
    }
  }
}
</script>

<style lang="sass">
.card 
  margin: 80px 30px 30px 30px

.itemField
  display: flex

a
  text-decoration: none
  color: #000000
  &:link, &:visited, &:hover, &:active
    color: #000000

.transparent
  background-color: blue!important

.v-card
  width: 100%
  max-width: 600px
  background-color: none
  background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)
  border: 1px solid rgba(255, 255, 255, 0.4) /* ボーダー */
  border-right-color: rgba(255, 255, 255, 0.2)
  border-bottom-color: rgba(255, 255, 255, 0.2)
  border-radius: 15px
  -webkit-backdrop-filter: blur(20px) /* ぼかしエフェクト */
  backdrop-filter: blur(20px)
  box-shadow: 0 5px 20px rgba(255, 152, 79, 0.5) /* 薄い影 */

</style>