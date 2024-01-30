import { defineStore} from "pinia";
import axios from "axios";
import {ref , computed} from 'vue';
export const useMovieStore = defineStore('movie', () => {
    const movies = ref([]);
    const series = ref([]);
    const episode = ref([]);
    const searchResults = ref([]);
    const query = ref('');
    const favMovie = ref([]);
    const dataMovie =ref([])

    const searchResultsValue = computed(()=>{
       return searchResults.value
    })
    const favData=computed(()=>{
        return favMovie.value
    })
    const getMovie = async () => {
        const response = await axios.get('http://www.omdbapi.com/?type=movie&apikey=d891a5b');
        movies.value = response.data;
    };

    const getSeries = async () => {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d891a5b');
        series.value = response.data;
    };

    const getEpisode = async () => {
        const response = await axios.get('http://www.omdbapi.com/?type=episode&apikey=d891a5b');
        episode.value = response.data;
    };

    const getAll = async () => {
        try {
            console.log('Calling getAll with query:', query.value);
            const response = await axios.get(`http://www.omdbapi.com/?s=${query.value}&r=json&apikey=d891a5b`);
            searchResults.value = response.data.Search;
            console.log('Search Results:', searchResults.value);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
   const getFavMovie =(imdbID)=>{
      favMovie.value.push(imdbID)
       localStorage.setItem('favourite',JSON.stringify(favMovie.value))
           console.log(favMovie.value)
   }
     const getMovieDetails = async (imdbID) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&r=json&apikey=d891a5b`);
            this.$patch({dataMovie : response.data.Search});
        } catch (error) {
            console.error('Error fetching movie details:', error);
            throw error;
        }
    };
    return {
        movies,
        series,
        episode,
        searchResults,
        query,
        favMovie,
        searchResultsValue,
        dataMovie,
        getFavMovie,
        getMovieDetails,
        getMovie,
        getSeries,
        getEpisode,
        getAll,
    };
});
