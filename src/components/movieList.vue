<template>
  <v-container>
    <v-card class="">
      <v-card-title>movie</v-card-title>
      <v-form>
        <v-text-field
        v-model="movieName"
        @input="onMovieInputChange"
        placeholder="enter movie name"
        id="movieInput"
        ></v-text-field>
      </v-form>
      <v-card-text v-if="movieData">
        <h2>{{movieData.name}}</h2>
        <h3>{{movieData.year}}</h3>
      </v-card-text>
    </v-card>
  </v-container>
  <router-view></router-view>
</template>
<script>
import axios from "axios";
export default {
data(){
  return{
movieName : '',
movieData :null
  }
},
  methods :{
  async movieDataFun(){
    const response = await axios.get('http://www.omdbapi.com/?apikey=[yourkey]&')
    console.log(response)
  this.movieData =response.data
  },
    onMovieInputChange(){
    this.movieDataFun()
    }
  }
}
</script>
