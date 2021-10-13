import requests from "./requests";
import axios from "axios";
import { Todo, TodoStatus } from "../models/todo";

export const fetchTodosWithLimit = async () => {
  return axios
    .get(requests.fetchTodosWithLimit)
    .then((response) => {
      const data = response.data as Array<Todo>;
      const todosData = data.map((todo: Todo) => {
        return { id: todo.id, title: todo.title, status: TodoStatus.TODO };
      });
      return todosData;
    })
    .catch((err) => {
      console.log("Error fetching todos", err);
      return;
    });
};
