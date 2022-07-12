import { useState } from "react";
import { useEffect } from "react";
import Task from "./Task";
import TodoForm from "./TodoForm.js";
import Filters from "./Filters";
import Pagination from "./Pagination";
import moment from "moment";

function App() {
  const NUM_TASK = 4;
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState("filter__all");
  //const [statusTask, setstatusTask] = useState(0);
  const [page, setPages] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const [sort, setSort] = useState("sort__last");

  // useEffect(() => {
  //   console.log('use effect');
  //   setPagesCount((Math.ceil((tasks.length + 1) / 4)) || 1)
  // }, [filters]);

  const handleFilter = (filter) => {
    setFilter(filter);
    //setPagesCount(Math.ceil(tasks.length / 4) || 1);
  };
  const handleSort = (sort) => {
    setSort(sort);
  };
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

  // const pagination = () => {
  //   let arrayPages = [];
  //   for (let i = 1; i < pagesCount + 1; i++) {
  //     arrayPages.push(
  //       <div
  //         key={Math.random()}
  //         className={
  //           i === page
  //             ? "pagination__pages__number activePages"
  //             : "pagination__pages__number"
  //         }
  //       >
  //         {i}
  //       </div>
  //     );
  //   }
  //   return arrayPages;
  // };

  const addTask = (userInput) => {
    if (userInput) {
      const newTask = {
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("DD/MM/YYYY"),
      };

      setTasks([...tasks, newTask]);
    }

    //setPagesCount((Math.ceil((tasks.length + 1) / 4)) || 1);
  };
  useEffect(() => {
    setPagesCount(Math.ceil(tasks.length / 4) || 1);
  }, [tasks]);



  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    //setPagesCount((Math.ceil((tasks.length-1) / 4)) || 1);
  };



  const checkTask = (task) => {
    task.check = !task.check;
    // setstatusTask(1)
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
        {tasks
          .filter((task) =>
            filters === "filter__all"
              ? tasks
              : filters === "filter__done"
              ? task.check === true
              : task.check !== true
          )
          .sort((prev, next) =>
            sort === "sort__last" ? prev.id - next.id : next.id - prev.id
          )
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

      <div className="pagination">
        <button
          className="pagination__back"
          onClick={(event) => {
            handlePage(event);
          }}
        >
          back
        </button>
        <div className="pagination__pages">
          {new Array(pagesCount).fill().map((el, i) => <div key={i}>{i}</div>)}
        </div>
        <button
          className="pagination__forward"
          onClick={(event) => {
            handlePage(event);
          }}
        >
          forward
        </button>
      </div>
    </main>
  );
}

export default App;
