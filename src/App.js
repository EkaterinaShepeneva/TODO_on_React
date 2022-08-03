import { useState, useEffect } from "react";
import { FILTERS, SORT, NUM_TASK } from "./constants.js";
import { getTasks } from "./api/http.js";
import style from "./App.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TodoInputForm from "./components/TasksBox/TodoInputForm";
import Filters from "./components/Filters/Filters";
import PagesButton from "./components/Pagination/PagesButton";
import TasksBox from "./components/TasksBox/TasksBox";
import SignOut from "./components/SignIn/SignOut.js";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState(FILTERS.ALL);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sort, setSort] = useState(SORT.LAST);

  useEffect(() => {
    renderTask();
  }, [filters, currentPage, sort]);

  const renderTask = () => {
    const login = localStorage.getItem('login')

    getTasks(currentPage, filters, sort, login)
      .then((response) => {
        const countPage = Math.ceil(response.count / NUM_TASK);
        setPagesCount(countPage);
        if (currentPage > countPage) {
          setCurrentPage(1);
        }
        setTasks(response.tasks);
      })
  };

  const changePageNext = (next) => {
    switch (next) {
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
      <div className={style.logo}>TODOTODOT</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />

      <TodoInputForm renderTask={renderTask} />
      <div className={style.container}>
        <div>
          <Filters
            setFilter={setFilter}
            setSort={setSort}
            filters={filters}
            sort={sort}
          />
          <TasksBox tasks={tasks} renderTask={renderTask} />

          {pagesCount > 1 && (
            <PagesButton
              changePageNext={changePageNext}
              pagesCount={pagesCount}
              currentPage={currentPage}
              changeCurrentPage={changeCurrentPage}
            />
          )}
        </div>
        <SignOut />
      </div>

    </main>
  );
}
export default App;
