import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getTask = (currentPage) =>
  axiosInstance
    .get(`/tasks/5?order=asc&pp=5&page=${currentPage}`)
    .then((resp) => {
      const newTasks = resp.data;

      return newTasks;
    });

export const postTask = (newTask) => {
  axiosInstance
    .post(`/task/5`, newTask)
    .then((resp) => {
      console.log("send");
    })
    .catch(function (error) {
      console.log("ошибочка");
    });
};
