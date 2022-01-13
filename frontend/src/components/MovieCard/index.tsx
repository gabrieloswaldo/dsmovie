import Button from "components/Button";
import MovieScore from "components/MovieScore";

const MovieCard = (): JSX.Element => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div>
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt="Movie poster"
      ></img>
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <Button text="Review" />
      </div>
    </div>
  );
};

export default MovieCard;
