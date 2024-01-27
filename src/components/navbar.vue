<script setup>
import {useMovieStore} from "@/stores/movieStore.js";
import {watchEffect, toRefs} from 'vue'

const movieStore = useMovieStore();
const {query, searchResultsValue} = toRefs(movieStore)
const {getAll} = movieStore;

watchEffect(async () => {
  await getAll();
})
</script>
<template>
  <v-container>
    <nav class="v-col-12 bg-blue-grey-darken-4">
      <ul class="d-inline-flex" style="margin-left: 570px;list-style-type: none;">
        <li>
          <router-link to="/">home</router-link>
        </li>
        <li class="pl-10">
          <router-link to="/Film">film</router-link>
        </li>
        <li class="pl-10">
          <router-link to="/Series">series</router-link>
        </li>
        <li class="pl-10">
          <router-link to="/LiveTv">tv Show</router-link>
        </li>
      </ul>
      <input type="text"
             class="pl-4"
             v-model="query"
             placeholder="enter your movie"
      >
    </nav>
    <v-row v-if="searchResultsValue.length > 0">
      <v-col class="v-col-6"
             v-for="result in searchResultsValue"
             :key="result.imbID">
        <v-card class="v-col-3">
          <v-card-title class="v-col-5">{{ result.Title }}</v-card-title>
          <v-card-subtitle class="v-col-5">{{ result.Type }}</v-card-subtitle>
          <v-card-text>
            <p>{{ result.Year }}</p>
            <p>{{ result.Director }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <p>no reults sorry!</p>
      </v-col>
    </v-row>
    <router-view/>
  </v-container>
</template>
<style scoped>
ul li a {
  text-decoration: none;
  color: whitesmoke;
}

input {
  box-shadow: 2px 2px 5px #888;
  position: absolute;
  top: 12px;
  right: 30px;
  border-radius: 50px;
  color: white
}

input::placeholder {
  color: white;
}
</style>
