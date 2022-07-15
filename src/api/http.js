import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://todo-api-learning.herokuapp.com/v1",
});

axiosInstance.get("/task", {});

axiosInstance.post("/task", { name: "sds" });
