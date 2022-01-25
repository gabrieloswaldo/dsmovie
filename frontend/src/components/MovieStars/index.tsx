import { ReactComponent as StarFullIcon } from "assets/img/star-full.svg";
import { ReactComponent as StarHalfIcon } from "assets/img/star-half.svg";
import { ReactComponent as StarEmptyIcon } from "assets/img/star-empty.svg";
import "./styles.css";

type Props = {
  score: number;
};

type StarProps = {
  fill: number;
};

const getFills = (score: number): number[] => {
  const fills = [0, 0, 0, 0, 0];

  const integerPart = Math.floor(score);

  for (let i = 0; i < integerPart; i++) {
    fills[i] = 1;
  }

  const diff = score - integerPart;
  if (diff > 0) {
    fills[integerPart] = 0.5;
  }

  return fills;
};

const Star = ({ fill }: StarProps): JSX.Element => {
  if (fill === 0) {
    return <StarEmptyIcon />;
  } else if (fill === 1) {
    return <StarFullIcon />;
  } else {
    return <StarHalfIcon />;
  }
};

const MovieStars = ({ score }: Props): JSX.Element => {
  const fills = getFills(score);

  return (
    <div className="dsmovie-stars-container">
      <Star fill={fills[0]} />
      <Star fill={fills[1]} />
      <Star fill={fills[2]} />
      <Star fill={fills[3]} />
      <Star fill={fills[4]} />
    </div>
  );
};

export default MovieStars;
