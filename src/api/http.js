import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllTasks = (currentPage, currentSort) =>
  axiosInstance
    .get(`/tasks/5?order=${currentSort}&pp=5&page=${currentPage}`)
    .then((resp) => {
      const newTasks = resp.data;
      return newTasks;
    });

export const getDoneTasks = (currentPage, currentSort) =>
  axiosInstance
    .get(`/tasks/5?filterBy=done&order=${currentSort}&pp=5&page=${currentPage}`)
    .then((resp) => {
      const newTasks = resp.data;
      return newTasks;
    });

export const getUndoneTasks = (currentPage, currentSort) =>
  axiosInstance
    .get(
      `/tasks/5?filterBy=undone&order=${currentSort}&pp=5&page=${currentPage}`
    )
    .then((resp) => {
      const newTasks = resp.data;
      return newTasks;
    });

export const postTasks = (newTask, renderTask) => {
  axiosInstance
    .post(`/task/5`, newTask)
    .then(() => {
      renderTask();
    })
    .catch(function (error) {
      console.log("ошибочка", error);
    });
};

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
