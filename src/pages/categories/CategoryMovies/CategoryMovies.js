import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { apiConfig } from "../../../api/api";
import { imageServerUrl } from "../../../constants";
import { textDots } from "../../../helpers";
import Loading from "../../../components/loading/Loading";
import ReactPaginate from "react-paginate";
import Style from "./style";

const CategoryMovies = () => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const { id, name } = useParams();

  useEffect(() => {
    apiConfig
      .get("/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e", {
        params: { with_genres: id, page },
      })
      .then((response) => {
        const data = response.data.results;
        setLoading(false);
        setData(data);
        setPageCount(response.data.total_pages);
      });
  }, [page]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setPage(selectedPage + 1);
  };

  const renderFarm = () => {
    return data.map((item) => {
      const imageurl = `${imageServerUrl}${item.poster_path}`;
      return (
        <div key={item.id} className="col-6 col-sm-4 col-md-3 col-xl-2">
          <div className="movie">
            <div className="movie-cover">
              <Link to={`/movie/${item.id}`}>
                <img src={imageurl} alt="item.title" />
                <h3 className="movie-title">
                  {textDots(item.title || item.original_title)}
                </h3>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Style>
      <div className="container text-light py-4">
        <h1 className="py-2">{`${name} Movies`}</h1>
        <Loading isLoading={loading} />
        <div className="d-flex flex-wrap align-items-center">
          {renderFarm()}
        </div>
        <nav aria-label="...">
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
          />
        </nav>
      </div>
    </Style>
  );
};

export default CategoryMovies;
