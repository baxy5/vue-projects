<template>
  <router-view></router-view>
</template>

<script>
export default {
}
</script>

<style>
:root{
    font-size: 20px;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #fff;
    font-family: 'Kanit', sans-serif;
    color: black;
}
html{
  scroll-behavior: smooth;
}
/*          Scrollbar         */
body::-webkit-scrollbar {
    width: 8px;               
}
  
body::-webkit-scrollbar-track {
    background: white;        
}
  
body::-webkit-scrollbar-thumb {
    background-color: black;   
    border-radius: 20px;      
}
</style>

