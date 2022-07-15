import { useState, useEffect } from "react";

import "./App.css";
import { FILTERS, SORT } from "./constants.js";

import TodoInputForm from "./components/TasksBox/TodoInputForm";
import Filters from "./components/Filters/Filters";
import PagesButton from "./components/Pagination/PagesButton";
import TasksBox from "./components/TasksBox/TasksBox";
import Api from "./Api.js";

import axios from "axios";

import UserData from "./UserData";
import OnLoadingUserData from "./OnLoadingUserData";

function App() {
  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl =
      "https://todo-api-learning.herokuapp.com/v1/tasks/9?order=asc&pp=5&page=4";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState({
        loading: false,
        persons: allPersons,
      });
    });
  }, [setAppState]);

  const [tasks, setTasks] = useState([]);
  const [filters, setFilter] = useState(FILTERS.ALL);
  const [filtredArray, setFiltredArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [sort, setSort] = useState(SORT.LAST);

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
      <DataLoading
        isLoading={appState.loading}
        persons={appState.persons}
        tasks={tasks}
        setTasks={setTasks}
      />
    </main>
  );
}

export default App;
