import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { title } = useParams();
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{movie.title}</h2>
      <p style={{ maxWidth: "600px", margin: "10px auto" }}>{movie.description}</p>
      <div style={{ margin: "20px auto", width: "560px", height: "315px" }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailer}
          title="Movie Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">
        <button
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default MovieDescription;
