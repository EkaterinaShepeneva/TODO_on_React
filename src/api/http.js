import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const renderError = (error) => {};

export const getTasks = (currentPage, currentSort, currentFilter) =>
  axiosInstance
    .get(
      `/tasks/5?${currentFilter}order=${currentSort}&pp=5&page=${currentPage}`
    )
    .then((resp) => {
      const newTasks = resp.data;
      return newTasks;
    })
    .catch(function (error) {});

export const postTasks = (newTask, renderTask) =>
  axiosInstance
    .post(`/task/5`, newTask)
    .then(() => {
      renderTask();
      return true;
    })
    .catch(function (error) {
      renderError(error);
      return false;
    });

export const deleteTasks = (uuid, renderTask) => {
  axiosInstance.delete(`/task/5/${uuid}`).then(() => {
    renderTask();
  });
};

export const changeTasks = (uuid, renderTask, newName) => {
  axiosInstance
    .patch(`/task/5/${uuid}`, {
      name: newName,
    })
    .then(() => {
      renderTask();
    });
};

export const checkTasks = (uuid, renderTask, checkStatus) => {
  axiosInstance
    .patch(`/task/5/${uuid}`, {
      done: checkStatus,
    })
    .then(() => {
      renderTask();
    });
};
