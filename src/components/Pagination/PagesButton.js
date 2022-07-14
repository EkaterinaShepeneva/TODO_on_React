import Pagination from "./Pagination";
import "./Pagination.css";

const PagesButton = ({
  flipPage,
  pagesCount,
  currentPage,
  changeCurrentPage,
}) => {
  return (
    <div className="pagination">
      <button className="pagination__back" onClick={flipPage}>
        back
      </button>
      <button onClick={() => changeCurrentPage(1)} className="first_page">
        First page
      </button>
      <div className="pagination__pages">
        {new Array(pagesCount).fill().map((_, index) => (
          <Pagination
            key={index}
            currentPage={currentPage}
            numberPage={index + 1}
            changeCurrentPage={changeCurrentPage}
          />
        ))}
      </div>
      <button
        onClick={() => changeCurrentPage(pagesCount)}
        className="last_page"
      >
        Last page
      </button>
      <button className="pagination__forward" onClick={flipPage}>
        forward
      </button>
    </div>
  );
};

export default PagesButton;
