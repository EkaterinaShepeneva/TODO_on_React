import axios from "axios";

export let errorMessage = "";
export let errorCode = "";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosInstanceServer = axios.create({
  baseURL: "http://localhost:4000",
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
  axiosInstanceServer
    .get("/tasks", {
      params: { filterBy: filter, order: sort, pp: 5, page: currentPage },
    })
    .then((resp) => {
      return resp.data;
    });

export const postTask = (newTask) =>
  axiosInstanceServer.post(`/tasks`, newTask);

export const deleteTask = (uuid) => axiosInstance.delete(`/task/5/${uuid}`);

export const changeTask = (uuid, newName) =>
  axiosInstance
    .patch(`/task/5/${uuid}`, {
      name: newName,
    })
    .then(() => {
      return true;
    });

export const checkPatchTask = (uuid, checkStatus) =>
  axiosInstance.patch(`/task/5/${uuid}`, {
    done: checkStatus,
  });
