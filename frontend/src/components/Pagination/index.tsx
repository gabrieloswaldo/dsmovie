import { ReactComponent as ArrowIcon } from "assets/img/arrow.svg";
import { MoviePage } from "services/types";
import "./styles.css";

type Props = {
  page: MoviePage;
  onChange: Function;
};

const Pagination = ({ page, onChange }: Props): JSX.Element => {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <ArrowIcon />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="dsmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <ArrowIcon className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
