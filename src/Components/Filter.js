import React, { useState } from "react";

function Filter({ setFilter, addMovie }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleFilter = () => {
    setFilter({ title, rate });
  };

  const handleAddMovie = () => {
    if (!newMovie.title || !newMovie.posterURL) return alert("Enter all fields!");
    addMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Filter Movies</h2>
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        style={{ marginLeft: "10px" }}
      />
      <button onClick={handleFilter} style={{ marginLeft: "10px" }}>
        Apply Filter
      </button>

      <h2 style={{ marginTop: "30px" }}>Add a New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        style={{ marginLeft: "10px" }}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        style={{ marginLeft: "10px" }}
      />
      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
        style={{ marginLeft: "10px", width: "80px" }}
      />
      <button onClick={handleAddMovie} style={{ marginLeft: "10px" }}>
        Add Movie
      </button>
    </div>
  );
}

export default Filter;

 