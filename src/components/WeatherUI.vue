<template>
  <button @click="fetchData">Load weather</button>
  <div class="weather-container" v-if="typeof weather.main != 'undefined'">
    <h1>{{Math.round(weather.main.temp)}}°C</h1>
    <h3>{{weather.name}} - {{weather.sys.country}}</h3>
    <h2>{{weather.weather[0].main}}</h2>
    <p> {{weather.weather[0].description}} </p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            API_KEY: "",
            BASE_URL: "https://api.openweathermap.org/data/2.5/",
            weather: {},
        }
    },
    props: ["query"],
    methods: {
    fetchData(e){
      fetch(`${this.BASE_URL}weather?q=${this.query}&units=metric&APPID=${this.API_KEY}`)
      .then(res => {
          return res.json()
      })
      .then(this.setResults)
    },
    setResults(results){
      this.weather = results
      console.log(this.weather)
    }
  }
}
</script>