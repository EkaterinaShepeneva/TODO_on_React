import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstanceServer = axios.create({
  baseURL: BASE_URL,
});

axiosInstanceServer.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosInstanceServer.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    const errorCode = error.response.status;
    const errorMessage = error.response.data.message;
    const notify = () => toast(`ERROR CODE: ${errorCode}, ${errorMessage}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });;
    notify()
    return Promise.reject(error);
  }
);

export const getTasks = (currentPage, filter, sort) =>
  axiosInstanceServer
    .get(`/tasks`, {
      params: { filterBy: filter, order: sort, pp: 5, page: currentPage },
    })

export const postTask = (name) =>
  axiosInstanceServer.post(`/tasks`, { name });

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

