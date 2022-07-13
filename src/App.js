import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

import TodoForm from "./components/TasksBox/TodoForm";
import Filters from "./components/Filters/Filters";
import PagesButton from "./components/Pagination/PagesButton";
import TasksBox from "./components/TasksBox/TasksBox";

const NUM_TASK = 4;

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState("filter__all");
  const [filtredArray, setFiltredArray] = useState(tasks);
  const [page, setPages] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sort, setSort] = useState("sort__last");

  useEffect(() => {
    if (page > pagesCount) {
      setPages(pagesCount);
    }
  }, [pagesCount]);

  const handlePage = (event) => {
    switch (event.target.className) {
      case "pagination__forward":
        if (page === pagesCount) {
          break;
        }
        setPages(page + 1);
        break;
      case "pagination__back":
        if (page === 1) {
          break;
        }
        setPages(page - 1);
        break;
      default:
        break;
    }
  };

  const movingOnPages = (number) => {
    setPages(number);
  };

  const validate = (val) => {
    if (val === "") {
      alert("Введите что-нибудь");
      return false;
    }
    let arrayWord = val.split(" ");
    let result = true;

    arrayWord.forEach((item) => {
      if (item.length > 32) {
        alert("многого хотите, нет такого слова");
        result = false;
      }
    });

    return result;
  };

  return (
    <main>
      <h1>ToDo</h1>
      <TodoForm setTasks={setTasks} tasks={tasks} validate={validate} />
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
        NUM_TASK={NUM_TASK}
        page={page}
        tasks={tasks}
        setTasks={setTasks}
        filtredArray={filtredArray}
        validate={validate}
      />
      {pagesCount > 1 ? (
        <PagesButton
          handlePage={handlePage}
          pagesCount={pagesCount}
          page={page}
          movingOnPages={movingOnPages}
        />
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
