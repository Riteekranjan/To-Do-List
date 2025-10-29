import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getTasks = () => API.get("/tasks");
export const addTask = (title) => API.post("/tasks", { title });
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
