import { imageServerUrl } from "../../constants";
import { textDots } from "../../helpers";
import get from "lodash/get";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import './style.css';

const SearchList = ({ data = [] }) => {
  const renderFarm = () => {
    const result = get(data, "results", []);
    return result.slice(0, 9).map((item) => {
      const { original_title, poster_path, id, title } = item;
      const imageUrl = `${imageServerUrl}${poster_path}`;
      return (
        <Link to={`/movie/${id}`}>
          <div key={id} className="search-list">
            <div className="search-list-img">
              <img src={imageUrl} alt={original_title} />
            </div>

            <h3>{textDots(title, 10)}</h3>
          </div>
        </Link>
      );
    });
  };
  return (
    <>
      <div className="search-list-handler">{renderFarm()}</div>
    </>
  );
};

export default SearchList;
