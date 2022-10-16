import style from "./MovieCard.module.css";

function MovieCard({ movie }) {
  // https://www.pexels.com/api/ - API for images (free)
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={style.movieCard}>
      <img
        width={230}
        height={345}
        className={style.movieImage}
        src={imageUrl}
        alt={movie.title}
      />
      {movie.title}
    </li>
  );
}

export default MovieCard;
