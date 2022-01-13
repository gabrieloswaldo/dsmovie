import "./styles.css";

type Props = {
  buttonType?: "button" | "submit" | "reset";
  customClassName?: string;
  text: string;
};

const Button = (props: Props): JSX.Element => {
  return (
    <button
      type={props.buttonType}
      className={"btn btn-primary dsmovie-btn ".concat(
        props.customClassName ?? ""
      )}
    >
      {props.text}
    </button>
  );
};

export default Button;
