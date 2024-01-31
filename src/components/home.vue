<script setup>
import {useMovieStore} from "@/stores/movieStore.js";
import {watch, toRefs } from 'vue'
const movieStore = useMovieStore();
const {query, searchResultsValue} = toRefs(movieStore)
const {getAll , getFavMovie ,favMovieData} = movieStore;
function call_api(){
  getAll()
}
</script>
<template>
    <v-container>
      <div>
        <input type="text"
                class="pl-4"
                v-model="query"
                placeholder="enter your movie"
               @input="call_api"
      ></div>
      <v-row v-if="searchResultsValue.length > 0">
        <v-col class="v-col-3 d-inline-flex pl-5 mt-12"
               v-for="result in searchResultsValue"
               :key="result.imdbID"
        >
          <v-card class=''>
            <div class="v-col-4" style="height: 300px">
              <img :src="result.Poster" alt="" class="ml-12"
                   style="box-shadow: 1px -5px 8px #999;width: 100%;height: 100%">
            </div>
            <div style="position: relative;left: 50px;">
              <v-card-title
                  style="display: block;font-size: 1rem;font-family:Nunito;color:antiquewhite;font-weight: 600;"
                  class="v-col-10 mb-2 mt-1">{{ result.Title }}
              </v-card-title>
              <v-card-subtitle class="mb-3"
                               style="border-radius: 12px;padding:6px 8px;font-size: .8rem;font-family:Poppins;letter-spacing: 1px;font-weight: 500;box-shadow: 1px 1px 3px #333;color:#888">
                {{ result.Type }}
              </v-card-subtitle>
              <v-card-text class="d-inline-flex">
                <p class="ml-3 mb-3"
                   style="box-shadow:1px 1px 3px #333;border-radius: 12px;padding: 6px 10px;font-family: Poppins;font-size: .8rem;color:#888;font-weight: 500">
                  {{ result.Year }}</p>
                <p>{{ result.Director }}</p>
              </v-card-text>
              <button class="ml-6"
                  @click="getFavMovie(result.imdbID)"
             > add to fav
              </button>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col>
          <p>no reults sorry!</p>
        </v-col>
      </v-row>
    </v-container>
</template>
<style>
input {
  box-shadow: 1px 1px 1px #888;
  position: absolute;
  top: 25px;
  right: 30px;
  border-radius: 25px;
  color: white;
}

input::placeholder {
  color: rebeccapurple;
}
body,html{
  background-color: black;
}
img{
  transform: scale(.9);
}
img:hover{
  transform: scale(1);
  max-width: 100%;
  height: 100%;
  transition: 500ms;
  cursor: pointer;

}
button{
  background-color: rgba(102, 51, 153, 0.40);
  color: rgba(255, 255, 255, 0.70);
  font-family: Poppins;
  padding: 6px;
  border-radius: 12px;
  font-weight: 400;
  font-size: .7rem;
}
</style>
