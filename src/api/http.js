import axios from "axios";

export let errorMessage = "";
export let errorCode = "";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosInstanceServer = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
  }
});

axiosInstanceServer.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    errorCode = error.response.status;
    errorMessage = error.response.data.message;
    return Promise.reject(error);
  }
);

export const getTasks = (currentPage, filter, sort, login) =>
  axiosInstanceServer
    .get(`/tasks`, {
      params: { filterBy: filter, order: sort, pp: 5, page: currentPage, login: login },
    })
    .then((resp) => {
      return resp.data;
    });

export const postTask = (login, name) =>
  axiosInstanceServer.post(`/tasks`, { name, login });

export const deleteTask = (uuid) =>
  axiosInstanceServer.delete(`/tasks/${uuid}`);

export const changeTask = (uuid, newName) =>
  axiosInstanceServer
    .patch(`/tasks/${uuid}`, {
      name: newName,
    })
    .then(() => {
      return true;
    });

export const checkPatchTask = (uuid, checkStatus) =>
  axiosInstanceServer.patch(`/tasks/${uuid}`, {
    done: !checkStatus,
  });


export const postSignIn = (login, password) =>
  axiosInstanceServer.post(`/signIn`, {
    login,
    password
  });


export const postRegistration = (login, password) =>
  axiosInstanceServer.post(`/registration`, {
    login,
    password
  });

