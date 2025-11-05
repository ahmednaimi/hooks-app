import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {movies.length > 0 ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p>No movies match your search.</p>
      )}
    </div>
  );
}

export default MovieList;
