<template>
<div id="app">
  <router-link to="/"></router-link>
  <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@500;600&family=Gamja+Flower&family=Mukta:wght@300&family=Nunito&family=Poppins&display=swap;400&family=Signika&display=swap');
/*
font-family: 'Bebas Neue', sans-serif;
font-family: 'Caveat', cursive;
font-family: 'Gamja Flower', sans-serif;
font-family: 'Mukta', sans-serif;
font-family: 'Signika', sans-serif;
font-family: 'Nunito', sans-serif;
font-family: 'Poppins', sans-serif;
*/
body{
  height: 800px;
  background-color: #222;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
