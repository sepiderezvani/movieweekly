<template>
<div id="app">
  <nav class="v-col-12 mt-6"style="font-family: Poppins">
    <ul class="d-inline-flex" style="margin-left: 545px;list-style-type: none;">
      <li>
        <router-link to="/favMovie" style="color: rebeccapurple">my favs</router-link>
      </li>
      <li class="pl-10">
        <router-link to="/">home</router-link>
      </li>
      <li class="pl-10">
        <router-link to="/film">film</router-link>
      </li>
      <li class="pl-10">
        <router-link to="/series">series</router-link>
      </li>
      <li class="pl-10">
        <router-link to="/liveTv">tv Show</router-link>
      </li>
    </ul>
  </nav>
  <router-view/>
  </div>
</template>
<script>
export default {
  name :'app'
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
ul li a {
  text-decoration: none;
  color: whitesmoke;
}

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
