function Pagination({ currentPage, numberPage, changeCurrentPage }) {
  return (
    <div
      className={ "pagination__pages__number"
        // i === currentPage
        //   ? "pagination__pages__number activePages"
        //   : "pagination__pages__number"
      }
      aria-selected={numberPage === currentPage}
    >
      <button onClick={() => changeCurrentPage(numberPage)}>{numberPage}</button>
    </div>
  );
}

export default Pagination;
