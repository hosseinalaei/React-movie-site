import React from "react";
import { Link } from "react-router";
import Slider from "react-slick";
import { textDots } from "../../helpers";
import { imageServerUrl } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./SlideShow.css";

const SimilarMovie = ({ similarMovie }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const renderSlider = () => {
    const sliceMovie = similarMovie.slice(0, 20);
    return sliceMovie.map((item) => {
      const { original_title, poster_path, id, genre } = item;
      const imageUrl = `${imageServerUrl}${poster_path}`;
      const defaultImage = `${`/assets/images/default.jpg`}`;
      return (
        <div className="slider-item" key={id}>
          <Link to={`/movie/${id}`}>
            <img
              src={imageUrl ? imageUrl : defaultImage}
              alt={`${original_title}-movie`}
            />
            <h3 className="movie-title">{textDots(original_title)}</h3>
          </Link>
          {/* <Link to={`/movie/${id}`}>
                        <p>{genre.map((genre)=>(
                            genre.
                        ))}</p>
                    </Link> */}
        </div>
      );
    });
  };

  return (
    <div className="slider">
      <Slider {...settings}>{renderSlider()}</Slider>
    </div>
  );
};

export default SimilarMovie;
