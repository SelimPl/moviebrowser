import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const detailUrl = `movies/${movie.id}`;
  const alternativePhotoo =
    "https://cdn.browshot.com/static/images/not-found.png";

  const AlternativePhoto = () => {
    if (movie.poster_path == null) {
      return <img src={alternativePhotoo} className="card-img-top" alt="" />;
    } else {
      return <img src={posterUrl} className="card-img-top" alt="" />;
    }
  };
  
  return (
    <div className="col-lg-3 col-md-3 col-2 my-5">
      <div className="card">
        <AlternativePhoto />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Pokaż opis
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  
  const title = `Wyszukujesz własnie: ${keyword}`;
  // console.log(keyword);
 

  const resultHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  const NoResult = () => {
    if(searchResults.length > 0){
        return (
          <div className="container">
          <div className="row">{resultHtml}</div>
          </div>
        )
    }else {
      return(
      
          <div className="container">
          <div className="row">Brak wyników, wprowadź poprawnie tytuł</div>
          </div>
       
      )
    }
  }
 

  return (
    <div>
    <Hero text={title} />
    <NoResult />
    </div>
  );
};

export default SearchView;
