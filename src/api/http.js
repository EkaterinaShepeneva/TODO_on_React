import axios from "axios";

import UserData from "../UserData";
import OnLoadingUserData from "../OnLoadingUserData";
import { useState, useEffect } from "react";

export const axiosInstance = axios.create({
  baseURL: "https://todo-api-learning.herokuapp.com/v1",
});

//https://todo-api-learning.herokuapp.com/v1/tasks/9?order=asc&pp=5&page=1
//https://todo-api-learning.herokuapp.com/v1/task/9
const Api = ({ tasks, setTasks, setPagesCount, currentPage }) => {
  const DataLoading = OnLoadingUserData(UserData);

  const [appState, setAppState] = useState({
    loading: false,
    persons: null,
  });

  useEffect(() => {
    setAppState({ loading: true });

    axiosInstance
      .get(`/tasks/9?order=asc&pp=5&page=${currentPage}`)
      .then((resp) => {
        const allPersons = resp.data;
        setAppState({
          loading: false,
          persons: allPersons,
        });
      });
  }, [setAppState, currentPage]);

  // axiosInstance
  //   .post(`/task/9`, ans)
  //   .then((resp) => {
  //     console.log("send");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <DataLoading
      isLoading={appState.loading}
      persons={appState.persons}
      tasks={tasks}
      setTasks={setTasks}
      setPagesCount={setPagesCount}
    />
  );
};

export default Api;
