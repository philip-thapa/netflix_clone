const API_Key = "c2206235d3d0be8db45c873172f9da43";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_Key}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
