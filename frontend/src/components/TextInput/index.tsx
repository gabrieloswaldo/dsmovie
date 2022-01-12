import "./styles.css";

type Props = {
  labelType: string;
  labelText: string;
  inputId: string;
};

const TextInput = (props: Props): JSX.Element => {
  return (
    <div className="form-group dsmovie-form-group">
      <label htmlFor={props.labelType}>{props.labelText}</label>
      <input
        type={props.labelType}
        className="form-control"
        id={props.inputId}
      />
    </div>
  );
};

export default TextInput;
