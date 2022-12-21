<template>
  <div class="items">
    <WeatherItem />
    <div class="newsField">
      <div v-for="article in articles" :key="article.title">
          <Item :article="article"/>    
      </div>
    </div>
  </div>
</template>

<script>
import  Item  from "./atoms/Item"
import  WeatherItem from "./atoms/WeatherItem"

export default {
  components: {
    Item,
    WeatherItem
  },
  props: {
    articles: Array
  },
}

</script> 

<style lang="sass" scoped>
.items
  width: 100vw
  margin: 0 auto
  flex-wrap: wrap
  display: flex

.newsField
  width: 100vw
  margin: 0 auto
  display: flex
  flex-wrap: wrap
</style>