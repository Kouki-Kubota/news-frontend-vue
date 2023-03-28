<template>
  <v-app>
    <!-- ここにヘッダーをコーディング -->
    <header>
      <v-app-bar
        app
        dark
      >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue-News</v-toolbar-title>
          <div class="textField">
            <v-text-field
              hide-details
              append-icon="mdi-magnify"
              single-line
              v-model="keyword"
              label="ニュースを検索"
              v-on:keydown.enter="searchResource(keyword); updateBookmarkStatus(false)"
            ></v-text-field>
          </div>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group v-model="group">
            <v-list-item>
              <v-list-item-title @click="setResource('headLines'); updateBookmarkStatus(false)">HeadLines</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('sport'); updateBookmarkStatus(false)">sport</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('business'); updateBookmarkStatus(false)">business</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('technology'); updateBookmarkStatus(false)">tech</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('science'); updateBookmarkStatus(false)">science</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('entertainment'); updateBookmarkStatus(false)">entertainment</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="setResource('bookmark'); updateBookmarkStatus(true)">bookmark</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>
  </v-app>
</template>
 
<script>

export default {
  data:() => ({
    drawer: false,
    group: null,
    keyword: ''
  }),
  watch: {
    group() {
      this.drawer = false
    }
  },
  props: {
    setResource: Function,
    searchResource: Function,
    updateBookmarkStatus: Function
  },
  methods: {
    confirmSerchContent() {
      console.log(this.keyword)
    }
  }
}
</script>
 
<style lang="sass">
.textField
  margin-left: 40px
  width: 300px

</style>