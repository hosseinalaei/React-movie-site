import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageServerUrl } from "../../constants";
import { galleryServerUrl } from "../../constants";
import { apiConfig } from "../../api/api";
import Loading from "../../components/loading/Loading";
import Style from "./style";
import SimilarMovie from "../../components/SimilarMovie/SimilarMovie";

function Movie() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [video, setVideo] = useState("");
  const [images, setImages] = useState("");
  const { id } = useParams();
  const [similarMovie, setSimilarMovie] = useState([]);

  const getData = async () => {
    const response = await apiConfig.get(
      `/movie/${id}?api_key=1e32e196d77987f5d442a50704d6481e`,
      { params: { id: id } }
    );
    try {
      const data = response.data;
      console.log(data);
      setLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
      alert("Error Occured, Please Reload website");
    }
  };
  const getVideo = async () => {
    const response = await apiConfig.get(
      `/movie/${id}/videos?api_key=1e32e196d77987f5d442a50704d6481e`,
      { params: { id: id } }
    );
    try {
      const videoData = response.data.results[0].key;
      console.log(videoData);
      setLoading(false);
      setVideo(videoData);
    } catch (error) {
      alert("Error Occured, Please Reload website");
    }
  };
  const getImages = async () => {
    const response = await apiConfig.get(
      `/movie/${id}/images?api_key=1e32e196d77987f5d442a50704d6481e`,
      { params: { id: id } }
    );
    try {
      const gallery = response.data;
      console.log("gallery", gallery);
      console.log("backdrops", gallery.backdrops);
      setLoading(false);
      setImages(gallery);
    } catch (error) {
      alert("Error Occured, Please Reload website");
    }
  };
  const getSimilarMovie = async () => {
    const response = await apiConfig.get(
      `/movie/${id}/similar?api_key=1e32e196d77987f5d442a50704d6481e`,
      { params: { id: id } }
    );
    try {
      const similar = response.data.results;
      console.log("similar", similar);
      setLoading(false);
      setSimilarMovie(similar);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
    getVideo();
    getImages();
    getSimilarMovie();
  }, [id]);

  const imageurl = `${imageServerUrl}/${data.poster_path}`;

  const renderGenre = () => {
    if (data.genres) {
      return data.genres.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      });
    }
  };
  const renderCompany = () => {
    if (data.production_companies) {
      return data.production_companies.map((item) => {
        return <li key={item.name}>{item.name}</li>;
      });
    }
  };

  const renderVideo = () => {
    if (video) {
      const src = `https://www.youtube.com/embed/${video}`;
      return (
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    } else {
      <p>Could not load video</p>;
    }
  };

  const renderGallery = () => {
    if (images) {
      return images.backdrops.map((item) => {
        return (
          <div className="gallery-photo col-6 col-md-4">
            <div className="m-1">
              <img
                src={`${galleryServerUrl}${item.file_path}`}
                key={item.file_path}
                alt="movie-poster"
              />
            </div>
          </div>
        );
      });
    }
  };
  const bgImage = () => {
    console.log("bg", `${galleryServerUrl}${data.backdrop_path}`);
  };
  return (
    <Style>
      <Loading isLoading={loading} />
      <div
        className="movie-bg"
        style={{
          backgroundImage: `url(${galleryServerUrl}${data.backdrop_path})`,
        }}
      >
        <div className="bg-filter">
          <div className="container py-5">
            <div className="row movie py-5 text-white">
              <div className="col-md-3">
                <img src={imageurl} alt={data.title} />
                {bgImage()}
              </div>
              <div className="col-md-9">
                <h1>{data.title || data.original_title}</h1>
                <p>
                  Genre:
                  <ul>{renderGenre()}</ul>
                </p>
                <p>
                  Production Company: <ul>{renderCompany()}</ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-white">
        <div className="row py-5">
          <div className="col-6">
            <p className="h2">Overview</p>
            <p>{data.overview}</p>
          </div>
          <div className="col-6">{renderVideo()}</div>
        </div>
        <div className="pb-5">
          <div className="py-2">
            <h3>{`${data.title} Photos`}</h3>
          </div>
          <div className="d-flex flex-wrap">{renderGallery()}</div>
        </div>
        <div>
          <h3>Silmilar Movie</h3>
          <SimilarMovie similarMovie={similarMovie} />
        </div>
      </div>
    </Style>
  );
}

export default Movie;
