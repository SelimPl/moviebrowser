import Hero from "./Hero";

const Home = () => {
  return (
    <div className="text-center">
      <Hero text={"Strona główna"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-3">
            <p className="lead">
              Wyszukiwarka filmów
            </p>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1608027178830-e5e0588d771d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwZmlsbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1596055270548-244e556e37dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwZmlsbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1611598623623-19ed06cf27fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwZmlsbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                  
                </div>
                
              </div>
            </div>
            <div className="container">
        <div className="row">
      <h1 className="fs-1 my-5 text-decoration-underline fst-italic text-center">
        Created by Selim Pł
      </h1>
        </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
