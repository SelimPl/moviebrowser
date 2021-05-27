import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutViev from "./components/AboutViev";
import SerachView from "./components/SerchView";
import MovieView from "./components/MovieView";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=609015710f442332e48493dac13e5cf5&language=en-US&query=${searchText}&page=1&include_adult=false`;
    // console.log(searchText, "wyszukiwany film")
    if (searchText) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.total_results);

          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/moviebrowser" exact>
          <Home />
        </Route>
        <Route path="/moviebrowser/about" component={AboutViev} />
        <Route path="/moviebrowser/search">
          <SerachView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/moviebrowser/movies/:id" component={MovieView} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
