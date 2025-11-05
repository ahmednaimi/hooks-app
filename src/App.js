import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";


function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/51s+R7l3HkL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Exploration beyond the stars and time.",
      posterURL: "https://m.media-amazon.com/images/I/81kqKQ3+KIL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rate: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rate
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🎬 Movie Library</h1>
      <Filter setFilter={setFilter} addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

