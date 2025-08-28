import baseAxios from "axios";

const apiConfig = baseAxios.create({
  baseURL: "http://api.themoviedb.org/3",
  // baseURL: "http://api.themoviedb.org/3/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e",
  // baseURL: "https://murmuring-tundra-31743.herokuapp.com/movies/3/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e",
  // baseURL: "https://murmuring-tundra-31743.herokuapp.com/movies/3",
});
export { apiConfig };
