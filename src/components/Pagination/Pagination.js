import style from "./Pagination.module.css";

function Pagination({ currentPage, numberPage, changeCurrentPage }) {
  return (
    <div
      className={style.pagination__pages__number}
      aria-selected={numberPage === currentPage}
    >
      <button onClick={() => changeCurrentPage(numberPage)}>
        {numberPage}
      </button>
    </div>
  );
}

export default Pagination;
