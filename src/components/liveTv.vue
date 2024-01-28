<script setup>
import {useMovieStore} from "@/stores/movieStore.js";
const store = useMovieStore()

</script>
<template>
<h1>this is live</h1>
  <router-view></router-view>
</template>
