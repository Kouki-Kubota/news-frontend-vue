<template>
  <v-app>
    <v-list-item-title @click="setResource(constant.resource)">{{ constant.name }}</v-list-item-title>
  </v-app>
</template>

<script>

export default {
  name: 'sideBar',
  data () {
    return {
      //menuItems: this.$store.state.news.newsData,
      select: false,
      drawer: false
    }
  },
  props: {
    setResource: Function,
    constant: Object
  },
}
</script>

<style lang='sass'>

</style>