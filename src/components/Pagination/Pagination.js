function Pagination({ currentPage, i, changeCurrentPage }) {
  return (
    <div
      className={ "pagination__pages__number"
        // i === currentPage
        //   ? "pagination__pages__number activePages"
        //   : "pagination__pages__number"
      }
      aria-selected={i === currentPage}
    >
      <button onClick={() => changeCurrentPage(i)}>{i}</button>
    </div>
  );
}

export default Pagination;
