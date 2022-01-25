import axios, { AxiosRequestConfig } from "axios";
import Button from "components/Button";
import SelectInput from "components/SelectInput";
import TextInput from "components/TextInput";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api, BASE_URL } from "services/api";
import { Movie } from "services/types";
import validateEmail from "utils/email-validator";
import "./styles.css";

type Props = {
  movieId: string;
};

const FormCard = ({ movieId }: Props): JSX.Element => {
  const [movie, setMovie] = useState<Movie>();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/movies/${movieId}`).then((response: { data: Movie }) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if (!validateEmail(email)) {
      return;
    }

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "PUT",
      url: "/scores",
      data: {
        email: email,
        movieId: movieId,
        score: score,
      },
    };

    axios(config).then((_) => {
      navigate("/");
    });
  };

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt="Movie poster"
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
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
