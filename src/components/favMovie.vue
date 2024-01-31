<script setup>
import {useMovieStore} from "@/stores/movieStore.js";
import {watchEffect , toRefs} from "vue";
const movieStore = useMovieStore();
const {favMovie , dataMovie ,favData} = toRefs(movieStore)
const {getFavMovie} = movieStore
const storedFavMovie = localStorage.getItem('favourite');
if (storedFavMovie) {
  movieStore.favMovie= JSON.parse(storedFavMovie);
}

// const storedDataMovie = localStorage.getItem('favouriteMovie');
// if (storedDataMovie){
//   movieStore.dataMovie =JSON.parse(storedDataMovie)
// }
// watchEffect(() => {
//   for (const imdbID of favMovie.value) {
//     getFavMovie(imdbID)
//   }
// })
</script>
<template>
  <v-container>
    <v-row v-if="favMovie.length > 0">
      <v-col class="v-col-4 d-inline-flex pl-5 mt-12"
             v-for="movie in favMovie"
             :key="movie.imdbID"
      >
        <v-card class='v-col-12'>
          <div class="v-col-12" style="height: 300px">
            <img :src="movie.Poster" alt="" class="ml-12"
                 style="box-shadow: 1px -5px 8px #999;width: 100%;height: 100%">
          </div>
          <div style="position: relative;left: 50px;">
            <v-card-title
                style="display: block;font-size: 1rem;font-family:Nunito;color:antiquewhite;font-weight: 600;"
                class="v-col-10 mb-2 mt-1">{{ movie.Title }}
            </v-card-title>
            <v-card-subtitle class="mb-3"
                             style="border-radius: 12px;padding:6px 8px;font-size: .8rem;font-family:Poppins;letter-spacing: 1px;font-weight: 500;box-shadow: 1px 1px 3px #333;color:#888">
              {{ movie.Type }}
            </v-card-subtitle>
            <v-card-text class="d-inline-flex">
              <p class="ml-3 mb-3"
                 style="box-shadow:1px 1px 3px #333;border-radius: 12px;padding: 6px 10px;font-family: Poppins;font-size: .8rem;color:#888;font-weight: 500">
                {{ movie.Year }}</p>
              <p>{{ movie.Director }}</p>
            </v-card-text>
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
