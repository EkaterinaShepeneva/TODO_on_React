import { useState } from "react";
import { useEffect } from "react";
import Task from "./Task";
import TodoForm from "./TodoForm.js";
import Filters from "./Filters";
import Pagination from "./Pagination";
import PagesButton from "./PagesButton";
import moment from "moment";

function App() {
  const NUM_TASK = 4;
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState("filter__all");
  const [filtredArray, setFiltredArray] = useState(tasks);
  const [page, setPages] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sort, setSort] = useState("sort__last");

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  useEffect(() => {
    switch (filters) {
      case "filter__all":
        setFiltredArray(
          [...tasks].sort((prev, next) =>
            sort === "sort__last" ? prev.id - next.id : next.id - prev.id
          )
        );
        break;

      case "filter__done":
        setFiltredArray(
          [...tasks]
            .filter((task) => task.check === true)
            .sort((prev, next) =>
              sort === "sort__last" ? prev.id - next.id : next.id - prev.id
            )
        );
        break;

      default:
        setFiltredArray(
          [...tasks]
            .filter((task) => task.check !== true)
            .sort((prev, next) =>
              sort === "sort__last" ? prev.id - next.id : next.id - prev.id
            )
        );
        break;
    }
  }, [filters, sort, tasks]);

  useEffect(() => {
    setPagesCount(Math.ceil(filtredArray.length / 4) || 1);
  }, [filtredArray, filters, sort]);

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

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("LLLL"),
      };
      setTasks([...tasks, newTask]);
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        check: task.id === id ? !task.check : task.check,
      }))
    );
  };

  return (
    <main>
      <h1>ToDo</h1>
      <TodoForm addTask={addTask} />
      <Filters
        onFilter={handleFilter}
        onSort={handleSort}
        filters={filters}
        sort={sort}
      />
      <div className="tasksBox">
        {filtredArray
          .slice((page - 1) * NUM_TASK, NUM_TASK * page)
          .map((task) => {
            return (
              <Task
                task={task}
                key={task.id}
                removeTask={removeTask}
                checkTask={checkTask}
                tasks={tasks}
                page={page}
              />
            );
          })}
      </div>
      {(pagesCount>1)? (
         (
          <PagesButton
            handlePage={handlePage}
            pagesCount={pagesCount}
            page={page}
            movingOnPages={movingOnPages}
          />
        )
      ):('')}
    </main>
  );
}

export default App;
