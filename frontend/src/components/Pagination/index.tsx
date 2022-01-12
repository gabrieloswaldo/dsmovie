import { ReactComponent as ArrowIcon } from "assets/img/arrow.svg";
import "./styles.css";

const Pagination = (): JSX.Element => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true}>
          <ArrowIcon />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false}>
          <ArrowIcon className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
