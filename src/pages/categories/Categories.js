import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { apiConfig } from "../../api/api";
import Loading from "../../components/loading/Loading";
import "./Categories.css";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    apiConfig
      .get("/genre/movie/list?api_key=1e32e196d77987f5d442a50704d6481e")
      .then((response) => {
        setCategory(response.data.genres);
        setLoading(false);
      });
  }, []);
  const renderFarm = () => {
    return category.map((item) => {
      const { id, name } = item;
      return (
        <div
          key={id}
          className="genre col-6 col-sm-3 col-md-2 text-center py-2"
        >
          <div className="genre-handler mx-2">
            <Link to={`/categories/${name}/${id}`} className="text-light">
              <p>{name}</p>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container text-light pt-5">
      <h2>Movies Category</h2>
      <Loading isLoading={loading} />
      <div className="d-flex flex-wrap align-items-center">{renderFarm()}</div>
    </div>
  );
};

export default Categories;
