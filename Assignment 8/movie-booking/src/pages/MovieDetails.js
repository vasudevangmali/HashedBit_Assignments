import { useParams, useNavigate } from "react-router-dom";
import movies from "../movies";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <h3>Movie not found</h3>;
  }

  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <img
          src={movie.image}
          alt={movie.title}
          className="movie-poster"
        />

        <div className="movie-info">
          <h2>{movie.title}</h2>

          <p className="description">
            Enjoy an amazing cinematic experience. Book your seats now and
            enjoy the show on the big screen.
          </p>

          <button
            className="book-btn"
            onClick={() => navigate("/book")}
          >
            Book Seat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
