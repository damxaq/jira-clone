import React from "react";
import "./boardColumn.css";
import TodoCard from "../TodoCard/TodoCard";
import { Todo } from "../../models/todo";

interface PropTypes {
  todos: Array<Todo>;
  header: string;
}

const BoardColumn = ({ todos, header }: PropTypes) => {
  return (
    <div className="column-container">
      <header className="column-header">{header}</header>
      <div className="column-content">
        {todos &&
          todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} fullCard={false} />
          ))}
      </div>
    </div>
  );
};

export default BoardColumn;
