import Pagination from "./Pagination";
import style from "./Pagination.module.css";
import {FLIP_PAGE} from '../../constants.js'

const PagesButton = ({
  flipPage,
  pagesCount,
  currentPage,
  changeCurrentPage,
}) => {
  return (
    <div className={style.pagination}>
      <button onClick={() => flipPage(FLIP_PAGE.BACK)}>back</button>
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
      <button onClick={() => flipPage(FLIP_PAGE.FORWARD)}>forward</button>
    </div>
  );
};

export default PagesButton;
