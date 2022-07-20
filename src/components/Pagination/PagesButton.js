import Pagination from "./Pagination";
import style from "./Pagination.module.css";

const PagesButton = ({
  flipPage,
  pagesCount,
  currentPage,
  changeCurrentPage,
}) => {
  return (
    <div className={style.pagination}>
      <button onClick={() => flipPage("back")}>back</button>
      <button onClick={() => changeCurrentPage(1)} className={style.first_page}>
        First page
      </button>
      <div className={style.pagination__pages}>
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
        className={style.last_page}
      >
        Last page
      </button>
      <button onClick={() => flipPage("forward")}>forward</button>
    </div>
  );
};

export default PagesButton;
