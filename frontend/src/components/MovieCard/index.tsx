import Button from "components/Button";
import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";
import { Movie } from "services/types";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props): JSX.Element => {
  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt="Movie poster"
      ></img>
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore score={movie.score} count={movie.count} />
        <Link to={`/form/${movie.id}`}>
          <Button text="Review" />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
