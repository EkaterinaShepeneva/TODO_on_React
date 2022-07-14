import { useEffect } from "react";
import { FILTERS, SORT } from "../../constants.js";
import "./Filters.css";

function Filters({
  setFilter,
  setSort,
  setFiltredArray,
  setPagesCount,
  filters,
  tasks,
  sort,
  filtredArray,
}) {
  const onFilter = (filter) => {
    setFilter(filter);
  };

  const onSort = (sort) => {
    setSort(sort);
  };

  useEffect(() => {
    switch (filters) {
      case 0:
        setFiltredArray(
          [...tasks].sort((prev, next) =>
            !sort ? prev.id - next.id : next.id - prev.id
          )
        );
        break;

      case 1:
        setFiltredArray(
          tasks
            .filter((task) => task.check)
            .sort((prev, next) =>
              !sort ? prev.id - next.id : next.id - prev.id
            )
        );
        break;

      default:
        setFiltredArray(
          tasks
            .filter((task) => task.check !== true)
            .sort((prev, next) =>
              !sort ? prev.id - next.id : next.id - prev.id
            )
        );
        break;
    }
  }, [filters, sort, tasks]);

  useEffect(() => {
    setPagesCount(Math.ceil(filtredArray.length / 4) || 1);
  }, [filtredArray, filters]);

  return (
    <section className="filterBox">
      <div className="filterBox__filter">
        <button
          aria-pressed={filters === 0}
          onClick={() => {
            onFilter(FILTERS.ALL);
          }}
        >
          All
        </button>
        <button
          aria-pressed={filters === 1}
          onClick={() => {
            onFilter(FILTERS.DONE);
          }}
        >
          Done
        </button>
        <button
          aria-pressed={filters === 2}
          onClick={() => {
            onFilter(FILTERS.UNDONE);
          }}
        >
          Undone
        </button>
      </div>
      <div className="filterBox__sorting">
        <span>Sort by Date</span>
        <button
          aria-pressed={sort}
          onClick={() => {
            onSort(SORT.EARLY);
          }}
        >
          Ear
        </button>
        <button
          aria-pressed={!sort}
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
