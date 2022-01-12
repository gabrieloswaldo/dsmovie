import "./styles.css";

type Props = {
  labelType: string;
  labelText: string;
  selectId: string;
};

const SelectInput = (props: Props): JSX.Element => {
  return (
    <div className="form-group dsmovie-form-group">
      <label htmlFor={props.labelText}>{props.labelText}</label>
      {/* TODO: pass options as component props */}
      <select className="form-control" id={props.selectId}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
};

export default SelectInput;
