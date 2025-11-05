import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";
import MovieDescription from "./Components/MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dreams.",
      posterURL: "https://m.media-amazon.com/images/I/51s+R7l3HkL._AC_.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/81kqKQ3+KIL._AC_SY679_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rate: 0 });

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rate
  );

  return (
    <Router>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🎬 Movie Library</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilter={setFilter} addMovie={addMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route
            path="/movies/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
