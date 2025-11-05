import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "10px",
        width: "220px",
        margin: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <Link
        to={`/movies/${movie.title}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
