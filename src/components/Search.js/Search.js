import { Fragment, useEffect, useState } from "react";
import Loading from "../loading/Loading";
import SearchList from "./SearchList";
import "./style.css";

const Search = () => {
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (search.length >= 3) {
            setLoading(true)
            fetch(`https://murmuring-tundra-31743.herokuapp.com/movies/3/search/multi?api_key=4ba2c80bd43f2892ecb3349fa445015f&language=en-US&page=1&include_adult=false&query=${search}`)
                .then((response) => { return response.json() })
                .then(data => {
                    setLoading(false)
                    setMovies(data)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)
                })
        }
        else setMovies([])
    }, [search])

    const searchMovie = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

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
    )
}

export default Search;