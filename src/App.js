import { useState, useEffect } from "react";
import { FILTERS, SORT, NUM_TASK, FLIP_PAGE } from "./constants.js";
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
  const [isError, setIsError] = useState(false); 

  useEffect(() => {
    renderTask();
  }, [filters, currentPage, sort]);

  const renderTask = () => {
    getTasks(currentPage, filters, sort)
      .then((response) => {
        const vabalaba = Math.ceil(response.count / NUM_TASK)
        setPagesCount(vabalaba);
        if (currentPage > vabalaba) {
          setCurrentPage(1) //Когда удаляется последняя таска на странице переносит нас на 1, нельзя перенести
        }
        setTasks(response.tasks);
      })
      .catch((response) => {
        if (response) setIsError(true);
      });
      
  };

  const flipPage = (direction) => {//changePageNext(next)
    switch (direction) {
      case true: 
        if (currentPage === pagesCount) {
          break;
        }
        setCurrentPage(currentPage + 1);
        break;
      case false:
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
      {isError && <Error setIsError={setIsError} />}

      <TodoInputForm renderTask={renderTask} setIsError={setIsError} />

      <Filters
        setFilter={setFilter}
        setSort={setSort}
        filters={filters}
        sort={sort}
      />
      <TasksBox tasks={tasks} renderTask={renderTask} setIsError={setIsError} />
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
