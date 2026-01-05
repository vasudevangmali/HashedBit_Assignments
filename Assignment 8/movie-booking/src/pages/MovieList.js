import { Link } from "react-router-dom";
import movies from "../movies";
import "./MovieList.css";

function MovieList() {
  return (
    <div className="movie-list-container">
      <h2>Now Showing</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="movie-card"
          >
            <div className="image-wrapper">
              <img src={movie.image} alt={movie.title} />
            </div>
            <p className="movie-title">{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
