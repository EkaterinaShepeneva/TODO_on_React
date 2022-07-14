import Pagination from "./Pagination";
import "./Pagination.css";

function PagesButton({ flipPage, pagesCount, currentPage, changeCurrentPage }) {
  return (
    <div className="pagination">
      <button
        className="pagination__back"
        onClick={(event) => {
          flipPage(event);
        }}
      >
        back
      </button>
      <button onClick={() => changeCurrentPage(1)} className="first_page">
        First page
      </button>
      <div className="pagination__pages">
        {new Array(pagesCount).fill().map((el, i) => (
          <Pagination
            key={Math.random()}
            currentPage={currentPage}
            i={i + 1}
            changeCurrentPage={changeCurrentPage}
          />
        ))}
      </div>
      <button onClick={() => changeCurrentPage(pagesCount)} className="last_page">
        Last page
      </button>
      <button
        className="pagination__forward"
        onClick={(event) => {
          flipPage(event);
        }}
      >
        forward
      </button>
    </div>
  );
}

export default PagesButton;
