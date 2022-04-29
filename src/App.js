import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3a689f2e    ";
// const movie1 = {
//   Title: "The Shining in 30 Seconds (and Re-enacted by Bunnies)",
//   Year: "2004",
//   imdbID: "tt0473394",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}   `);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("super man ");
  }, []);

  return (
    <div className="app">
      <h1> Dojo Coding Movie Demo Api </h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> Search Not Found . . .</h2>
        </div>
      )}
    </div>
  );
};

export default App;
