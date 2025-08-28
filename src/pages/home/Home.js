import React, { useState, useEffect } from "react";
import SlideShow from "../../components/slider/SlideShow";
import Loading from "../../components/loading/Loading";
import { apiConfig } from "../../api/api";
import "./Home.css";
import Search from "../../components/Search.js/Search";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const response = await apiConfig.get(
        "/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e"
      );
      // axios.get("https://murmuring-tundra-31743.herokuapp.com/movies/3/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e")
      setMovies(response?.data?.results);
      console.log(response?.data?.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="container text-light home-content">
      <div className="slideshow">
        <SlideShow sliderMovie={movies} />
        <Loading isLoading={loading} />
      </div>
    </div>
  );
}

export default Home;
