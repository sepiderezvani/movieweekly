import { defineStore} from "pinia";
import axios from "axios";
import {ref , computed} from 'vue';
export const useMovieStore = defineStore('movie', () => {
    const movies = ref([]);
    const series = ref([]);
    const episode = ref([]);
    const searchResults = ref([]);
    const query = ref('');

    const searchResultsValue = computed(()=>{
       return searchResults.value
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
    const updateSearchResults = (data) => {
        searchResults.value = data;
    };

    return {
        movies,
        series,
        episode,
        searchResults,
        query,
        searchResultsValue,
        getMovie,
        getSeries,
        getEpisode,
        getAll,
    };
});
