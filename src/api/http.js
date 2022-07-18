import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getTasks = (currentPage) =>
  axiosInstance
    .get(`/tasks/5?order=asc&pp=5&page=${currentPage}`)
    .then((resp) => {
      const newTasks = resp.data;
      return newTasks;
    });

export const postTasks = (newTask, renderTask) => {
  axiosInstance
    .post(`/task/5`, newTask)
    .then((resp) => {
      renderTask();
      console.log("send");
    })
    .catch(function (error) {
      console.log("ошибочка", error);
    });
};

export const deleteTasks = (uuid, renderTask) => {
  axiosInstance.delete(`/task/5/${uuid}`).then((resp) => {
    renderTask();
  });
};
