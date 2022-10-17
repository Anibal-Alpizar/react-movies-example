import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";

function MoviesGrid() {
  useEffect(() => [
    fetch("/discover/movie", {
      headers: {
        Authorization: "Bearer",
        "Content-Type": "application/json;charset=utf-8",
      },
    }),
  ]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesGrid;
