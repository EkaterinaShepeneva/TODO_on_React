import { useState, useEffect } from "react";
import { FILTERS, SORT, NUM_TASK } from "./constants.js";
import { getTask } from "./api/http.js";

import "./App.css";

import TodoInputForm from "./components/TasksBox/TodoInputForm";
import Filters from "./components/Filters/Filters";
import PagesButton from "./components/Pagination/PagesButton";
import TasksBox from "./components/TasksBox/TasksBox";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState(FILTERS.ALL);
  const [filtredArray, setFiltredArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(6);
  const [sort, setSort] = useState(SORT.LAST);

  useEffect(() => {
    getTask(currentPage).then((response) => {
      setPagesCount(Math.ceil(response.count / NUM_TASK));
      setTasks(response.tasks);
    });
  }, [currentPage]);

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
      <TodoInputForm setTasks={setTasks} tasks={tasks} />
      <Filters
        setFilter={setFilter}
        setSort={setSort}
        setFiltredArray={setFiltredArray}
        setPagesCount={setPagesCount}
        filters={filters}
        tasks={tasks}
        sort={sort}
        filtredArray={filtredArray}
      />
      <TasksBox
        currentPage={currentPage}
        tasks={tasks}
        setTasks={setTasks}
        filtredArray={filtredArray}
      />
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
