import { Fragment, useEffect, useState } from "react";
import Loading from "../loading/Loading";
import SearchList from "./SearchList";
import "./style.css";
import { apiConfig } from "../../api/api";

const Search = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSearch = async () => {
    if (search.length >= 3) {
      setLoading(true);
      try {
        const response = await apiConfig.get(
          "/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e"
        );
        if (response) {
          setLoading(false);
          setMovies(response?.data);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else setMovies([]);
  };
  useEffect(() => {
    fetchSearch();
  }, [search]);

  const searchMovie = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <div className="position-relative ">
        <input
          type="text"
          placeholder="Search..."
          onKeyUp={searchMovie}
          className="search-input"
        />
        <Loading isLoading={loading} />
        <SearchList data={movies} />
      </div>
    </Fragment>
  );
};

export default Search;
