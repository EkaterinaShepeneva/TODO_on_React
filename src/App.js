import { useState, useEffect } from "react";
import { FILTERS, SORT, NUM_TASK } from "./constants.js";
import { getTasks } from "./api/http.js";

import "./App.css";

import TodoInputForm from "./components/TasksBox/TodoInputForm";
import Filters from "./components/Filters/Filters";
import PagesButton from "./components/Pagination/PagesButton";
import TasksBox from "./components/TasksBox/TasksBox";
import Error from "./components/Error/Error.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState(FILTERS.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sort, setSort] = useState(SORT.LAST);
  const [error, setError] = useState(false);

  useEffect(() => {
    renderTask();
  }, [filters, currentPage, sort]);

  const renderTask = () => {
    let currentSort = "";
    let currentFilter = "";

    switch (sort) {
      case false:
        currentSort = "asc";
        break;

      default:
        currentSort = "desc";
        break;
    }

    switch (filters) {
      case 0:
        currentFilter = "";
        break;

      case 1:
        currentFilter = "filterBy=done&";
        break;

      default:
        currentFilter = "filterBy=undone&";
        break;
    }

    getTasks(currentPage, currentSort, currentFilter)
      .then((response) => {
        setPagesCount(Math.ceil(response.count / NUM_TASK));
        setTasks(response.tasks);
      })
      .catch((response) => {
        if (!response) {
          setError(true);
        }
      });
  };

  useEffect(() => {
    if (currentPage > pagesCount) {
      setCurrentPage(1);
    }
  }, [pagesCount]);

  const flipPage = (direction) => {
    switch (direction) {
      case "forward":
        if (currentPage === pagesCount) {
          break;
        }
        setCurrentPage(currentPage + 1);
        break;
      case "back":
        if (currentPage === 1) {
          break;
        }
        setCurrentPage(currentPage - 1);
        break;
      default:
        break;
    }
  };

  const changeCurrentPage = (number) => {
    setCurrentPage(number);
  };

  return (
    <main>
      <h1>ToDo</h1>
      {error && <Error setError={setError} />}

      <TodoInputForm renderTask={renderTask} setError={setError} />

      <Filters
        setFilter={setFilter}
        setSort={setSort}
        filters={filters}
        sort={sort}
      />
      <TasksBox tasks={tasks} renderTask={renderTask} setError={setError} />
      {pagesCount > 1 && (
        <PagesButton
          flipPage={flipPage}
          pagesCount={pagesCount}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      )}
    </main>
  );
}
export default App;
