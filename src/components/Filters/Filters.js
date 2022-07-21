import { FILTERS, SORT } from "../../constants.js";
import style from "./Filters.module.css";

function Filters({ setFilter, setSort, filters, sort }) {
  const onFilter = (filter) => {
    setFilter(filter);
  };

  const onSort = (sort) => {
    setSort(sort);
  };

  return (
    <section className={style.filterBox}>
      <div className={style.filterBox__filter}>
        <button
          aria-pressed={filters === ""}
          onClick={() => {
            onFilter(FILTERS.ALL);
          }}
        >
          All
        </button>
        <button
          aria-pressed={filters === "done"}
          onClick={() => {
            onFilter(FILTERS.DONE);
          }}
        >
          Done
        </button>
        <button
          aria-pressed={filters === "undone"}
          onClick={() => {
            onFilter(FILTERS.UNDONE);
          }}
        >
          Undone
        </button>
      </div>
      <div className={style.filterBox__sorting}>
        <span>Sort by Date</span>
        <button
          aria-pressed={sort==='desc'}
          onClick={() => {
            onSort(SORT.EARLY);
          }}
        >
          Ear
        </button>
        <button
          aria-pressed={sort==='asc'}
          onClick={() => {
            onSort(SORT.LAST);
          }}
        >
          Las
        </button>
      </div>
    </section>
  );
}

export default Filters;
