import React from "react";
import "./boardColumn.css";
import TodoCard from "../TodoCard/TodoCard";

const BoardColumn = () => {
  return (
    <div className="column-container">
      <header className="column-header">TODO</header>
      <div className="column-content">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default BoardColumn;
