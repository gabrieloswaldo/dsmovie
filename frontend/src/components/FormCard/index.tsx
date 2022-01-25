import Button from "components/Button";
import SelectInput from "components/SelectInput";
import TextInput from "components/TextInput";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "services/api";
import { Movie } from "services/types";
import "./styles.css";

type Props = {
  movieId: string;
};

const FormCard = ({ movieId }: Props): JSX.Element => {
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    api.get(`/movies/${movieId}`).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt="Movie poster"
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form">
          <TextInput
            labelType="email"
            labelText="Provide an email address"
            inputId="email"
          />
          <SelectInput
            labelType="score"
            labelText="Leave your review"
            selectId="score"
          />
          <div className="dsmovie-form-btn-container">
            <Button buttonType="submit" text="Save" />
          </div>
        </form>
        <Link to="/">
          <Button buttonType="button" text="Cancel" customClassName="mt-3" />
        </Link>
      </div>
    </div>
  );
};

export default FormCard;
