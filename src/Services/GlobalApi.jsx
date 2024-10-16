import axios from "axios"

const movieBaseUrl= "https://api.themoviedb.org/3"
const api_key='4d0cc355c21de2c9e81d9ce31edcae76'

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=4d0cc355c21de2c9e81d9ce31edcae76"

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key)

const getMovieByGenreId=(id)=> axios.get(movieByGenreBaseURL +"&with_genres=" + id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}