<template>
    <input type="text" placeholder="Search for..." v-model="inputData" @keypress="fetchData">
</template>

<script>
export default {
    data(){
        return{
            API_KEY: "25a02f60842e95935a2ad510981fa4b3",
            BASE_URL: "api.openweathermap.org/data/2.5/",
            inputData: "",
            weather: {},
        }
    },
    methods: {
        fetchData(e){
            if(e.key == "Enter"){
                fetch(`${this.BASE_URL}weather?q=${this.inputData}&units=metric&appid=${this.API_KEY}`)
                .then(res => {
                    return res.json()
                })
                .then(this.setResults)
            }
        },
        setResults(results){
            this.weather = results
        },
    }
}
</script>

<style>
input{
    width: 100%;
    padding: 10px;
    margin: 20px;
    border-radius: 10px;
    border: none;
    outline-offset: 0px;
    outline: none;
    transition: all 1s;
}
input:focus{
    border: none;
}
input:hover{
    padding: 20px; 
}
</style>