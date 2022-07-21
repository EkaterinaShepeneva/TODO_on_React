import axios from "axios";

export let errorMessage = "";
export let errorCode = "";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    errorCode = error.response.status;
    errorMessage = error.response.data.message;
    return Promise.reject(error);
  }
);

export const getTasks = (currentPage, filter, sort) =>
  axiosInstance
    .get("/tasks/5", {
      params: { filterBy: filter, order: sort, pp:5,page: currentPage }
    })
    .then((resp) => {
      //const newTasks = resp.data;
      return resp.data;
    })
    .catch(() => {
      return false;
    });

export const postTasks = (newTask, renderTask) =>
  axiosInstance
    .post(`/task/5`, newTask)
    .then(() => {
      renderTask();/////убрать отсюда и перенести в вызов и так везде
      return true;
    })
    .catch(() => {
      return false;
    });

export const deleteTasks = (uuid, renderTask) =>
  axiosInstance
    .delete(`/task/5/${uuid}`)
    .then(() => {
      renderTask();
      return true;
    })
    .catch(() => {
      return false;
    });

export const changeTasks = (uuid, renderTask, newName) =>
  axiosInstance
    .patch(`/task/5/${uuid}`, {
      name: newName,
    })
    .then(() => {
      renderTask();
      return true;
    })
    .catch(() => {
      return false;
    });

export const checkTasks = (uuid, renderTask, checkStatus) =>
  axiosInstance
    .patch(`/task/5/${uuid}`, {
      done: checkStatus,
    })
