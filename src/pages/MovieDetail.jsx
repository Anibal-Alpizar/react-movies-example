import movie from "./movie.json";
import style from "./MovieDetail.module.css";

function MovieDetail() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={style.detailContainer}>
      <img
        className={`${style.col} ${style.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${style.col} ${style.movieDetails}`}>
        <p className={style.firstItem}>
          <strong> Title: {movie.title} </strong>
        </p>
        <p>
          <strong> Description: {movie.overview} </strong>
        </p>
        <strong>Genres: </strong>
        {movie.genres.map((genre) => genre.name).join(", ")}
      </div>
    </div>
  );
  Z;
}

export default MovieDetail;
