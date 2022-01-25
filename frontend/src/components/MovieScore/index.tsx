import MovieStars from "components/MovieStars";
import "./styles.css";

type Props = {
  score: number;
  count: number;
};

const MovieScore = ({ score, count }: Props): JSX.Element => {
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} reviews</p>
    </div>
  );
};

export default MovieScore;
