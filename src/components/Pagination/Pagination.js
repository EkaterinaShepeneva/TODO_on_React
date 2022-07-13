function Pagination({ page, i, movingOnPages }) {
  return (
    <div
      className={
        i === page
          ? "pagination__pages__number activePages"
          : "pagination__pages__number"
      }
    >
      <button onClick={() => movingOnPages(i)}>{i}</button>
    </div>
  );
}

export default Pagination;
