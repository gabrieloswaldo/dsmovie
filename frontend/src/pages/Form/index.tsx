import Button from "components/Button";
import SelectInput from "components/SelectInput";
import TextInput from "components/TextInput";
import { Link } from "react-router-dom";
import "./styles.css";

const Form = (): JSX.Element => {
  const movie = {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5,
  };

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie.image}
        alt="Movie poster"
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
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

export default Form;
