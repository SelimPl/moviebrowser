import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=609015710f442332e48493dac13e5cf5&language=pl-PL`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 1000);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Ładowanie..." />;
    }
    if (movieDetails) {
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <h3>
                  Ocena {movieDetails.vote_average} z {movieDetails.vote_count}{" "}
                  głosów{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return renderMovieDetails();
};

export default MovieView;
