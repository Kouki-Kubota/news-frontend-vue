<template>
  <div class="weather">
    <div id="icon">
      <v-card
        class="mx-auto card"
        width="400"
        height="400"
        color="rgb(255,0,0,0)"
      >
        <v-img
          id="wIcon"
          class="white--text align-end"
          height="100px"
          width="100px"
          color="rgb(255,0,0,0)"
          :src="`${iconUrl}${results[0].icon}.png`"
          alt="weather icon"
        >
        </v-img>
        <div class="wTemp">
          <p>{{ main.temp }}</p>
        </div>
        <div class="wDescription">
          <p>{{ results[0].description }}</p>
        </div>
        <p class="name">{{ name }}</p>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//open weatherのAPIkey

export default {
  data () {
    return {
      results: [],
      main: [],
      name: "",
      iconUrl: "http://openweathermap.org/img/w/"
    }
  },
  mounted() {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=Osaka,jp&units=metric&lang=ja&APPID='
    const key = '91d43fe9fc047a60807d14bbc8f2e798'
    axios.get(url + key)
    .then(response => {
      this.results = response.data.weather;
      this.main = response.data.main;
      this.name = response.data.name;
    })
  }
}
</script>

<style lang="sass" scoped>
#wIcon
  margin: 30px auto

.wTemp
  margin: 0 auto 30px auto
  p
    text-align: center
    font-size: 40px

.wDescription
  margin: auto 0
  p
    margin: 0 auto
    text-align: center
    font-size: 32px

.name
  font-size: 24px
  text-align: center
  margin-top: 10px
</style>
