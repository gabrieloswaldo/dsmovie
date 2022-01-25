import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { api } from "services/api";
import { MoviePage } from "services/types";

const Listing = (): JSX.Element => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: false,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    api
      // TODO: make the size selectable
      .get(`/movies?size=12&page=${pageNumber}&sort=title`)
      .then((response: { data: MoviePage }) => {
        const movies: MoviePage = response.data;
        setPage(movies);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number): void => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />
      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listing;
