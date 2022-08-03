import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    errorCode = error.response.status;
    errorMessage = error.response.data.message;
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

export const getTasks = (currentPage, filter, sort, login) =>
  axiosInstanceServer
    .get(`/tasks`, {

      params: { filterBy: filter, order: sort, pp: 5, page: currentPage, login },

    })
    .then((resp) => {
      return resp.data;
    });

export const postTask = (login, name) =>
  axiosInstanceServer.post(`/tasks`, { name, login });

export const deleteTask = (uuid, login) =>
  axiosInstanceServer.delete(`/tasks/${uuid}`, { params: { login } });

export const changeTask = (uuid, newName, login) =>
  axiosInstanceServer
    .patch(`/tasks/${uuid}`, {
      name: newName,
      login
    })
    .then(() => {
      return true;
    });

export const checkPatchTask = (uuid, checkStatus, login) =>
  axiosInstanceServer.patch(`/tasks/${uuid}`, {
    done: !checkStatus,
    login
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

